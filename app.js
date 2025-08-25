import React from "react";
import ReactDOM from "react-dom/client";

// Create a react element => it is an object => reactDOM renders this object as HTML element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🎉");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
