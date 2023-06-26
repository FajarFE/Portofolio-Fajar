import React, { useState } from "react";

function Timeline() {
  const [showTimeline1, setShowTimeline1] = useState(false);
  const [showTimeline2, setShowTimeline2] = useState(false);
   const [timeline1Active, setTimeline1Active] = useState(false);

  const handleClick1 = () => {
    setShowTimeline1(true);
    setShowTimeline2(false);
  };

  const handleClick2 = () => {
    setShowTimeline1(false);
    setShowTimeline2(true);
  };

  return (
    <div>
      <button onClick={handleClick1}>Timeline 1</button>
      <button onClick={handleClick2}>Timeline 2</button>

      {showTimeline1 && (
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <h1>adeh</h1>
        </div>
      )}

      {showTimeline2 && (
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <h2>menghadeh</h2>
        </div>
      )}
    </div>
  );
}


export default Timeline
