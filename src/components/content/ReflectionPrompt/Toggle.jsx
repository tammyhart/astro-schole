import { useState } from "react";

const Toggle = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <>
      <button onClick={handleClick}>
        <span>{isExpanded ? "Collapse" : "Expand"}</span>
        <i className={isExpanded ? "flip" : ""} />
      </button>

      <div className={`content ${isExpanded ? "expanded" : ""}`.trim()}>
        {children}
      </div>
    </>
  );
};

export default Toggle;
