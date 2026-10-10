import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bus,
  MapPin,
  Clock,
  Navigation,
  Phone,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import StatusBadge from "./StatusBadge";
import { useApp } from "../context/AppContext";

export default function TransportCard({ bus, compact = false }) {
  const [showStops, setShowStops] = useState(false);
  const navigate = useNavigate();
  const { setActiveChatPrompt } = useApp();

  const handleAskAI = () => {
    setActiveChatPrompt(`Where is Bus ${bus.busNumber} going?`);
    navigate("/assistant");
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-100 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Header: Bus Number & Status */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#9333EA] flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-purple-500/20 group-hover:scale-105 transition-transform">
              {bus.busNumber}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#6D28D9] uppercase tracking-wider">
                  Route {bus.routeNumber}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 font-medium">
                  {bus.tripType || "Trip 1"}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-[#6D28D9] transition-colors leading-snug">
                {bus.destination}
              </h3>
            </div>
          </div>

          <StatusBadge status={bus.status} />
        </div>

        {/* Route Name / Description */}
        <p className="text-xs text-slate-500 mb-4 line-clamp-1">
          📍 {bus.routeName}
        </p>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 gap-2 p-3 bg-[#FAF9FF] rounded-xl border border-purple-50 mb-4 text-xs">
          <div className="space-y-1">
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-purple-600" /> Departs:
            </span>
            <span className="font-bold text-slate-800">
              {bus.startingTime}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 flex items-center gap-1">
              <Navigation className="w-3.5 h-3.5 text-purple-600" /> Campus Bay:
            </span>
            <span className="font-bold text-slate-800 truncate block">
              {bus.campusBay || "Bay " + bus.busNumber}
            </span>
          </div>

          <div className="col-span-2 pt-1 border-t border-purple-100/60 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">Return Trips:</span>
            <span className="font-semibold text-purple-700">
              {bus.returnTimings ? bus.returnTimings.join(" & ") : "3:15 PM & 5:05 PM"}
            </span>
          </div>
        </div>

        {/* Important Stops Preview */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-purple-600" /> Important Boarding Stops:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {bus.stops.slice(0, 4).map((stop, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
              >
                {stop.name}
              </span>
            ))}
            {bus.stops.length > 4 && (
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-medium">
                +{bus.stops.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Collapsible Full Stop Timeline */}
        {showStops && (
          <div className="mt-3 pt-3 border-t border-purple-100 text-xs animate-in fade-in duration-200">
            <h4 className="font-bold text-slate-800 mb-2">Complete Route Timeline:</h4>
            <div className="relative pl-4 space-y-2.5 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-purple-200">
              {bus.stops.map((stop, i) => (
                <div key={i} className="relative flex items-start justify-between gap-2">
                  <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-[#6D28D9] ring-2 ring-white" />
                  <span className="font-medium text-slate-800">{stop.name}</span>
                  <span className="text-purple-700 font-mono text-[11px] font-semibold">
                    {stop.time}
                  </span>
                </div>
              ))}
            </div>

            {bus.officialLink && (
              <div className="mt-2 pt-2 border-t border-purple-100 flex items-center justify-between">
                <a
                  href={bus.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#6D28D9] font-medium hover:underline"
                >
                  <span>Boarding Points on rectransport.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            {bus.driverName && (
              <div className="mt-3 p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Driver Contact</p>
                  <p className="font-semibold text-slate-800 text-xs">{bus.driverName}</p>
                </div>
                <a
                  href={`tel:${bus.driverPhone}`}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#6D28D9] text-white text-xs font-medium hover:bg-[#4C1D95] transition-colors"
                >
                  <Phone className="w-3 h-3" /> Call
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-purple-50 flex items-center gap-2 mt-2">
        <button
          onClick={() => setShowStops(!showStops)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-purple-200 text-purple-800 hover:bg-purple-50 transition-colors"
        >
          {showStops ? (
            <>
              Hide Route <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              View Route <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <button
          onClick={handleAskAI}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#6D28D9] hover:bg-[#4C1D95] text-white shadow-sm shadow-purple-600/20 transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Ask AI
        </button>
      </div>

      {/* Official Source Footnote */}
      <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Source: REC Transport Department</span>
        <span className="text-purple-600 flex items-center gap-0.5">
          <ShieldCheck className="w-3 h-3" /> Official
        </span>
      </div>
    </div>
  );
}
