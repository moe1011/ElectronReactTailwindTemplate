import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const container = document.getElementById("target");
const root = createRoot(container);

root.render(
  <React.Fragment>
    <div className="App flex bg-gradient-to-r from-blue-700 to-pink-600 h-screen">
      <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-auto">
        Electron, React & Tailwind!
      </div>
    </div>
  </React.Fragment>
);
