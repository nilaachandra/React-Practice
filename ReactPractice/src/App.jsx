import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter"
function App() {
  return (
    <>
      <div className="flex justify-around items-center mt-[2vw]">
        <Card title="Hello Bro 1" description="Welcome to this website" />
        <Card title="Hello Bro 2" description="Welcome to this website" />
        <Card title="Hello Bro 3" description="Welcome to this website" />
        <Card title="Hello Bro 4" description="Welcome to this website" />
      </div>


      <Counter/>
    </>
  );
}

export default App;
