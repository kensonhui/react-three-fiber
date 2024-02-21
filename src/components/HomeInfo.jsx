import React from "react";

const renderContent = {
  1: (
    <h1 className="bg-blue-500 py-3 px-10">
      Hi, I'm <span className="font-semibold"> Kenson</span>
    </h1>
  ),
  2: <h1>2</h1>,
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
