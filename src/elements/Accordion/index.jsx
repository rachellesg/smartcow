import { useState } from "react";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div key={title} className={`accordion-item${isActive ? " active" : ""}`}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;
