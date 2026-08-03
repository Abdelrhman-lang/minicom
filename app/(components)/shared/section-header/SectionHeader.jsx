import React from "react";

function SectionHeader({ title = "" }) {
  return (
    <div>
      <h3 className="section-header  uppercase font-bold text-primary">
        {title}
      </h3>
    </div>
  );
}

export default SectionHeader;
