import React, { useState, useMemo } from "react";
import {
  Search,
  PlusCircle,
  Filter,
  CheckCircle,
  AlertTriangle,
  X,
  MapPin,
  Tag,
  Shield,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import LostFoundCard from "../components/LostFoundCard";

export default function LostFound() {
  const { lostFoundItems, addLostFoundItem } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // 'all', 'lost', 'found'

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportType, setReportType] = useState("lost"); // 'lost' or 'found'
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("Electronics");
  const [formLocation, setFormLocation] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formContact, setFormContact] = useState("");

  const categories = ["Electronics", "Bags", "Identity", "Books & Stationery", "Accessories", "Other"];

  // Search and filter items
  const filteredItems = useMemo(() => {
    return lostFoundItems.filter((item) => {
      if (filterType === "lost" && item.type !== "lost") return false;
      if (filterType === "found" && item.type !== "found") return false;

      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase();

      return (
        item.title.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    });
  }, [lostFoundItems, filterType, searchTerm]);

  const handleOpenModal = (type) => {
    setReportType(type);
    setFormTitle("");
    setFormLocation("");
    setFormDescription("");
    setFormContact("");
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !formLocation.trim() || !formDescription.trim()) return;

    addLostFoundItem({
      title: formTitle.trim(),
      category: formCategory,
      type: reportType,
      status: reportType === "found" ? "Found" : "Lost",
      location: formLocation.trim(),
      description: formDescription.trim(),
      contactPerson: formContact.trim() || "Student Desk",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-600/15 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3 border border-white/20">
              <Search className="w-3.5 h-3.5" />
              <span>Campus Security & Registry</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Lost & Found
            </h1>
            <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              Track missing items, report recovered belongings, and coordinate with campus security to reclaim lost articles.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleOpenModal("lost")}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Report Lost Item</span>
            </button>

            <button
              onClick={() => handleOpenModal("found")}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Report Found Item</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search item, location, or keyword..."
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

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-purple-100">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterType === "all"
                ? "bg-[#6D28D9] text-white shadow-sm"
                : "text-slate-600 hover:bg-purple-50"
            }`}
          >
            All Items ({lostFoundItems.length})
          </button>
          <button
            onClick={() => setFilterType("found")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterType === "found"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-emerald-50"
            }`}
          >
            Found ({lostFoundItems.filter((i) => i.type === "found").length})
          </button>
          <button
            onClick={() => setFilterType("lost")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterType === "lost"
                ? "bg-amber-500 text-white shadow-sm"
                : "text-slate-600 hover:bg-amber-50"
            }`}
          >
            Lost ({lostFoundItems.filter((i) => i.type === "lost").length})
          </button>
        </div>
      </div>

      {/* Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-purple-200 p-6">
          <Search className="w-12 h-12 text-purple-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 text-base">No items found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try searching for another term like "Backpack", "Calculator", or "ID Card".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <LostFoundCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Report Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-purple-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-purple-100">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                {reportType === "found" ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-600" /> Report Found Item
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Report Lost Item
                  </>
                )}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Item Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Blue HP Laptop Bag, Smart ID Card"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9] bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Library, A-Block, Bus 11"
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Description
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Provide distinguishing details, color, brand, or contents..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Contact / Handed To (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Handed to Main Security Desk"
                  value={formContact}
                  onChange={(e) => setFormContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-[#6D28D9]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-md ${
                    reportType === "found"
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-[#6D28D9] hover:bg-[#4C1D95]"
                  }`}
                >
                  Publish Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
