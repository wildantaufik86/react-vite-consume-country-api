import React from "react";

export default function Primary({ children }) {
  return (
    <div className="grid grid-cols-12 bg-slate-900 text-white">
      <section className="col-span-8 col-start-3 bg-gray-950/40 min-h-screen">{children}</section>
    </div>
  )
};
