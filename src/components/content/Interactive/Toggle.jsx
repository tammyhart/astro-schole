import { useState } from "react";

const Toggle = ({ children, heading }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(true);

  return (
    <>
      <button disabled={isExpanded} onClick={handleClick}>
        Click to explore:
      </button>

      <h3>{heading}</h3>

      <div className={`content ${isExpanded ? "expanded" : ""}`.trim()}>
        {children}
      </div>
    </>
  );
};

export default Toggle;
