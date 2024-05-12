import React from "react";

const renderContent = {
  1: (
    <div className="bg-blue-400 rounded-md shadow-sm w-90">
      <div className="py-3 px-10">
        <h1 className="text-white text-xl">
          Hey there, I'm <span className="font-semibold"> Kenson! 🎉</span>
        </h1>
        <p className="text-slate-50">
          I'm a 4th year CS/BBA student at UWaterloo emersed in learning a
          plethora of topics.
        </p>
      </div>
    </div>
  ),
  2: (
    <div className="bg-blue-400 rounded-md shadow-sm w-90">
      <div className="py-3 px-10">
        <p className="text-slate-50">
          I'm a 4th year CS/BBA student at UWaterloo emersed in learning a
          plethora of topics.
        </p>
      </div>
    </div>
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const InfoBox = ({ text, link, buttonText }) => {
  <div>{text}</div>;
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
