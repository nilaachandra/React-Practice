import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="flex justify-around items-center mt-[2vw]">
        <Card title="Hello Bro" description="Welcome to this website" />
        <Card title="Hello Bro 2" description="Welcome to this website" />
        <Card title="Hello Bro 3" description="Welcome to this website" />
        <Card title="Hello Bro 4" description="Welcome to this website" />
      </div>
    </>
  );
}

export default App;
