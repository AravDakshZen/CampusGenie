import React from "react";

export default function StatusBadge({ status, size = "md" }) {
  if (!status) return null;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs font-medium",
    lg: "px-3 py-1.5 text-sm font-medium",
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  // Faculty availability statuses
  if (status === "Available Now" || status === "Available") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available Now
      </span>
    );
  }

  if (status === "Currently Unavailable" || status === "Unavailable") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
        Currently Unavailable
      </span>
    );
  }

  if (status === "Availability Not Updated" || status === "Not Updated") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
        Availability Not Updated
      </span>
    );
  }

  // Bus statuses
  if (status === "On Route") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
        On Route
      </span>
    );
  }

  if (status === "Boarding Soon") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        Boarding Soon
      </span>
    );
  }

  if (status === "Scheduled") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        Scheduled
      </span>
    );
  }

  if (status === "Departed") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-slate-500"></span>
        Departed
      </span>
    );
  }

  // Lost & Found statuses
  if (status.toLowerCase() === "found") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        Found
      </span>
    );
  }

  if (status.toLowerCase() === "lost") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 ${currentSize}`}
      >
        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        Lost
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 ${currentSize}`}
    >
      {status}
    </span>
  );
}
