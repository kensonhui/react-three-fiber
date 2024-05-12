import React from "react";
import { Link } from "react-router-dom";

const Attributions = () => {
  return (
    <section className="relative top-12 p-6">
      <h1 className="text-lg font-bold">Attributions</h1>
      <p>Credits to the authors for the following 3D models:</p>
      <ul className="flex flex-col">
        <a
          href="https://sketchfab.com/3d-models/mining-town-c4196438ce3d4679baf0137cd3999940"
          target="_blank"
          className="text-blue-600 underline"
        >
          Mining Town - LowPolyBoy
        </a>
        <a
          href="https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042"
          target="_blank"
          className="text-blue-600 underline"
        >
          Phoneix Bird - NORBERTO-3D
        </a>
      </ul>
    </section>
  );
};

export default Attributions;
