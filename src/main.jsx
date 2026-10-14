import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import arLogo from "./public/images/ARLogo.png";

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "ARLogo.png";
favicon.href = arLogo;
document.head.appendChild(favicon);

createRoot(document.getElementById("root")).render(<App />);
