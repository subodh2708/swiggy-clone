import React from "react";
import ReactDOM from "react-dom/client";

// Create a react element => it is an object => reactDOM renders this object as HTML element

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🎉");

const jsxHeading = <h1 className="head">Namaste React with JSX</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
