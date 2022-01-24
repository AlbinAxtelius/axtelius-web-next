import React from "react";

const AxteliusTitles: React.FC = (props) => {
  return (
    <div
      data-testid="axtelius-titles"
      className="text-2xl md:text-6xl text-center font-mono mt-8"
    >
      <h1>
        <span className="font-extrabold">www</span>.axtelius.se
      </h1>
      <h1>
        www.<span className="font-extrabold">axtelius</span>.se
      </h1>
      <h1>
        www.axtelius.<span className="font-extrabold">se</span>
      </h1>
    </div>
  );
};

export default AxteliusTitles;
