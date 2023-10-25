import React from "react";
import TimerFunction from "./containers/TimerFunction/TimerFunction";
import TimerClass from "./containers/TimerClass/TimerClass";

function App() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Funtional Component
      </h1>
      <TimerFunction />
      <h1 style={{ color: "white", textAlign: "center" }}>
        Class Component
      </h1>
      <TimerClass />
    </>
  );
}

export default App;
