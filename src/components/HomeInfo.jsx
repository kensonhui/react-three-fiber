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
        <div className="flex justify-center my-2">
          <p className="text-white text-lg bold">
            Try clicking and dragging around the screen!
          </p>
        </div>
      </div>
    </div>
  ),
  2: (
    <div className="bg-blue-400 rounded-md shadow-sm w-90">
      <div className="py-3 px-10">
        <p className="text-slate-50">
          This is a short demo to learn about Three.JS, working with graphics,
          assets and animations in the browser.
        </p>
      </div>
    </div>
  ),
  3: (
    <div className="bg-blue-400 rounded-md shadow-sm w-90">
      <div className="py-3 px-10">
        <p className="text-slate-50">
          Three.js is a super cool library, I plan on using it for future
          projects!
        </p>
      </div>
    </div>
  ),
  4: (
    <div className="bg-blue-400 rounded-md shadow-sm w-90">
      <div className="py-3 px-10">
        <p className="text-slate-50">
          You can also check out my main portfolio website, hope you enjoyed the
          demo!
        </p>
      </div>
    </div>
  ),
};

const InfoBox = ({ text, link, buttonText }) => {
  <div>{text}</div>;
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
