import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  User,
  Shield,
  CheckCircle,
  Tag,
  ExternalLink,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function LostFoundCard({ item, onClaim }) {
  const [claimed, setClaimed] = useState(item.claimed || false);

  useEffect(() => {
    setClaimed(item.claimed || false);
  }, [item.claimed]);

  const handleClaim = () => {
    setClaimed(true);
    if (onClaim) onClaim(item.id);
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-100 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top: Status & Date */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <StatusBadge status={item.status} />

          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </span>
        </div>

        {/* Item Title & Category */}
        <div className="mb-2">
          <span className="text-[10px] uppercase font-bold text-[#6D28D9] tracking-wider px-2 py-0.5 rounded bg-purple-50 inline-block mb-1">
            {item.category}
          </span>
          <h3 className="font-bold text-slate-900 text-base group-hover:text-[#6D28D9] transition-colors leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        {/* Location & Contact Info */}
        <div className="p-3 bg-[#FAF9FF] rounded-xl border border-purple-50 text-xs space-y-2 mb-4">
          <div className="flex items-start gap-2 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-[#6D28D9] shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 text-[11px] block">Location</span>
              <span className="font-semibold text-slate-800">{item.location}</span>
            </div>
          </div>

          {item.contactPerson && (
            <div className="flex items-start gap-2 text-slate-700 pt-2 border-t border-purple-100/60">
              <User className="w-3.5 h-3.5 text-[#6D28D9] shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 text-[11px] block">Reported By / Handed to</span>
                <span className="font-semibold text-slate-800">{item.contactPerson}</span>
                {item.contactLocation && (
                  <span className="text-slate-500 text-[11px] block">({item.contactLocation})</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Claim / Inquire Button */}
      <div className="pt-3 border-t border-purple-50 flex items-center justify-between">
        {claimed ? (
          <div className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200">
            <CheckCircle className="w-4 h-4" /> Claim Request Submitted
          </div>
        ) : (
          <button
            onClick={handleClaim}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl bg-purple-50 text-[#6D28D9] hover:bg-[#6D28D9] hover:text-white border border-purple-200 transition-all duration-200"
          >
            {item.type === "found" ? "This is Mine (Claim Item)" : "I Found This Item"}
          </button>
        )}
      </div>
    </div>
  );
}
