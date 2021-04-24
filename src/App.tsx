import React from "react";
const hyrule_compendium = require("hyrule-compendium");

function App() {
  let comp = new hyrule_compendium.compendium();

  comp.get_all(console.log); // get all entries
  return <h1>Hello World</h1>;
}

export default App;
