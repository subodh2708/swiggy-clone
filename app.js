import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => <h1 className="head">Namaste React with JSX</h1>;

//React Functional component
const creator = "Subodh";

const HeadingComponent = () => {
  return (
    <div>
      {/* <Title /> */}
      <h1>React functional Component</h1>
      {creator}
      {Title()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
