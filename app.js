import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Heading = <h1 className="head">Namaste React with JSX</h1>;

//React Functional component

const HeadingComponent = () => {
  return <h1>React functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
