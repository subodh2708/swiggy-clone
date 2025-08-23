const parent = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I am a H1 element"),
    React.createElement("h2", {}, "I am a H2 element"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I am a H1 element"),
    React.createElement("h2", {}, "I am a H2 element"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
