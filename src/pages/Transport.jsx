import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bus,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Info,
  Clock,
  Navigation,
  Sparkles,
  LayoutGrid,
  Table as TableIcon,
  ChevronRight,
} from "lucide-react";
import { busRoutes, transportMeta } from "../data/transportData";
import TransportCard from "../components/TransportCard";
import StatusBadge from "../components/StatusBadge";
import { useApp } from "../context/AppContext";

export default function Transport() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Buses");
  const [viewMode, setViewMode] = useState("cards"); // 'cards' or 'table'
  const [visibleCount, setVisibleCount] = useState(24);
  const [showHelpline, setShowHelpline] = useState(false);

  const navigate = useNavigate();
  const { setActiveChatPrompt } = useApp();

  const filters = ["All Buses", "Morning", "Afternoon", "Evening"];

  // Filter & Search Logic
  const filteredBuses = useMemo(() => {
    return busRoutes.filter((bus) => {
      // Filter tab check
      if (activeFilter === "Morning" && bus.shift !== "Morning") return false;
      if (
        activeFilter === "Afternoon" &&
        (!bus.returnTimings || !bus.returnTimings.includes("3:15 PM"))
      )
        return false;
      if (
        activeFilter === "Evening" &&
        (!bus.returnTimings || !bus.returnTimings.includes("5:05 PM"))
      )
        return false;

      // Search term check
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase();

      return (
        bus.busNumber.toLowerCase().includes(term) ||
        bus.routeNumber.toLowerCase().includes(term) ||
        bus.destination.toLowerCase().includes(term) ||
        bus.routeName.toLowerCase().includes(term) ||
        bus.stops.some((s) => s.name.toLowerCase().includes(term))
      );
    });
  }, [searchTerm, activeFilter]);

  const displayedBuses = useMemo(() => {
    if (viewMode === "table") return filteredBuses;
    return filteredBuses.slice(0, visibleCount);
  }, [filteredBuses, visibleCount, viewMode]);

  const handleAskAI = (busNumber) => {
    setActiveChatPrompt(`Where is Bus ${busNumber} going?`);
    navigate("/assistant");
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-600/15 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3 border border-white/20">
              <Bus className="w-3.5 h-3.5" />
              <span>Full REC Transport Dataset • {busRoutes.length} Routes</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Rajalakshmi Transport
            </h1>
            <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              Complete routes from the official <strong>146 Routes Details</strong> portal (rectransport.com/js/146routedec25.php). Serves all Chennai corridors to REC Thandalam Campus (NH4).
            </p>
          </div>

          {/* Quick Helpline Trigger & Official Source Link */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowHelpline(!showHelpline)}
              className="px-4 py-2.5 rounded-xl bg-white text-[#6D28D9] hover:bg-purple-50 font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Transport Helpline</span>
            </button>

            <a
              href="https://www.rectransport.com/js/146routedec25.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-semibold text-xs border border-white/30 transition-all flex items-center gap-1.5"
            >
              <span>146 Routes Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Helpline Contact Modal / Expandable Card */}
      {showHelpline && (
        <div className="bg-purple-50 rounded-2xl border border-purple-200 p-5 animate-in fade-in duration-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[#6D28D9] text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" /> REC Transport Department Helpline & Contacts
            </h3>
            <span className="text-[11px] text-slate-500 font-mono">044 6718 1069 / 1040</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {transportMeta.coordinators.map((c, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-purple-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-800">{c.name}</p>
                  <p className="text-[11px] text-slate-500">{c.role}</p>
                </div>
                <a
                  href={`tel:${c.phone}`}
                  className="font-mono font-bold text-[#6D28D9] hover:underline"
                >
                  {c.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-purple-200/60 flex items-center justify-between text-xs text-slate-600">
            <span>Email: <strong className="text-slate-800">{transportMeta.email}</strong></span>
            <span>Campus: Thandalam, Chennai - 602 105</span>
          </div>
        </div>
      )}

      {/* Return Schedule Quick Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-purple-100 flex items-center gap-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6D28D9] flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">Afternoon Return: 3:15 PM</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold">
                65 Common Buses
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              General departure from campus bays to all common city routes.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-purple-100 flex items-center gap-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">Evening Return: 5:05 PM</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">
                65 Common Buses
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Special trip for students attending labs, extra classes, and project work.
            </p>
          </div>
        </div>
      </div>

      {/* Search, Filters, and View Switcher */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search bus number or destination..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 text-sm text-slate-800 placeholder-slate-400 bg-white transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Tabs & View Mode */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-purple-100 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? "bg-[#6D28D9] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-purple-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-purple-100">
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "cards"
                  ? "bg-[#6D28D9] text-white shadow-sm"
                  : "text-slate-600 hover:bg-purple-50"
              }`}
              title="Cards View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "table"
                  ? "bg-[#6D28D9] text-white shadow-sm"
                  : "text-slate-600 hover:bg-purple-50"
              }`}
              title="Official 146 Table View"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">146 Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* Examples Helper Tagline */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="font-semibold text-slate-600">Examples:</span>
        {[
          "Bus 11",
          "Tambaram",
          "Chengalpattu",
          "Route 19E",
          "Ennore",
          "Avadi",
          "Porur",
          "Kancheepuram",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setSearchTerm(item)}
            className="px-2.5 py-1 rounded-lg bg-purple-50 text-[#6D28D9] hover:bg-purple-100 transition-colors text-[11px] font-medium border border-purple-100"
          >
            {item}
          </button>
        ))}

        <span className="ml-auto text-xs text-slate-400">
          Showing {filteredBuses.length} of {busRoutes.length} official REC routes
        </span>
      </div>

      {/* Empty State */}
      {filteredBuses.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-purple-200 p-6">
          <Bus className="w-12 h-12 text-purple-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 text-base">No matching bus routes found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try searching for another bus number like "11", "18", "19", or destination like "Tambaram".
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveFilter("All Buses");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#6D28D9] text-white text-xs font-semibold hover:bg-[#4C1D95]"
          >
            Reset Search
          </button>
        </div>
      ) : viewMode === "cards" ? (
        /* CARDS VIEW */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedBuses.map((bus) => (
              <TransportCard key={bus.id} bus={bus} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredBuses.length && (
            <div className="text-center pt-4">
              <button
                onClick={() => setVisibleCount((prev) => prev + 24)}
                className="px-6 py-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-[#6D28D9] font-bold text-xs transition-colors shadow-sm"
              >
                Load More Routes ({filteredBuses.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      ) : (
        /* OFFICIAL 146 ROUTES TABLE VIEW (Matching https://www.rectransport.com/js/146routedec25.php) */
        <div className="bg-white rounded-3xl border border-purple-100 shadow-sm overflow-hidden">
          <div className="p-4 bg-purple-50/60 border-b border-purple-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Official 146 Bus Routes Timing Table
              </h3>
              <p className="text-xs text-slate-500">
                Source: rectransport.com/js/146routedec25.php
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#6D28D9] text-white">
              {filteredBuses.length} Routes Listed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF9FF] border-b border-purple-100 text-slate-600 font-bold uppercase text-[11px]">
                  <th className="py-3 px-4 w-14">S.No</th>
                  <th className="py-3 px-4 w-24">Route No</th>
                  <th className="py-3 px-4">Route Name / Origin</th>
                  <th className="py-3 px-4 w-32">Starting Time</th>
                  <th className="py-3 px-4 w-32">Campus Bay</th>
                  <th className="py-3 px-4 w-36">Boarding Points</th>
                  <th className="py-3 px-4 text-right w-28">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50">
                {displayedBuses.map((bus) => (
                  <tr
                    key={bus.id}
                    className="hover:bg-purple-50/40 transition-colors group"
                  >
                    <td className="py-3 px-4 text-slate-400 font-mono">
                      {bus.sno}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-md bg-purple-100 text-[#6D28D9] font-bold font-mono">
                        {bus.busNumber}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {bus.destination}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-purple-700">
                      {bus.startingTime}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {bus.campusBay}
                    </td>
                    <td className="py-3 px-4">
                      {bus.officialLink ? (
                        <a
                          href={bus.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6D28D9] hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>Boarding Points</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-400">View Details</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleAskAI(bus.busNumber)}
                        className="px-2.5 py-1 rounded-lg bg-[#6D28D9] hover:bg-[#4C1D95] text-white font-semibold text-[11px] shadow-2xs flex items-center gap-1 ml-auto transition-transform hover:scale-105"
                      >
                        <Sparkles className="w-3 h-3" /> Ask AI
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Official REC Transport Department Notice Banner */}
      <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
          <span>
            Official route dataset compiled from <strong>REC Transport Department</strong> (https://www.rectransport.com/js/146routedec25.php).
          </span>
        </div>
        <span className="text-[11px] text-slate-400 hidden sm:inline">
          147 Routes Loaded
        </span>
      </div>
    </div>
  );
}
