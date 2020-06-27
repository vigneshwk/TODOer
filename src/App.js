import React from "react";
import ThemeProvider from "./components/ThemeProvider";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider> */}
      <Todo />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
