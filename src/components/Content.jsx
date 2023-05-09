import React from "react";

export default function Content({children}) {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-full px-10">{children}</section>
    </div>
  )
};
