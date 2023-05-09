import React from "react";

export default function Header({children}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 col-start-2 py-10">
        {children}
      </div>
    </div>
  )
};
