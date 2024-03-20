const parent = React.createElement("h1", {id:"heading"}, "I am h1 tag");
console.log(parent);
const container = (document).getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(parent);