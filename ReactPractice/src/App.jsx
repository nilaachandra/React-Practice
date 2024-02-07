import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Namestatus from "./components/Namestatus";
import Heroes from "./components/Heroes";
import Playbase from "./components/Playbase";

function App() {
  return (
    <>
      <div className="flex justify-around items-center mt-[2vw]">
        <Card title="Hello Bro 1" description="Welcome to this website" />
        <Card title="Hello Bro 2" description="Welcome to this website" />
        <Card title="Hello Bro 3" description="Welcome to this website" />
        <Card title="Hello Bro 4" description="Welcome to this website" />
      </div>

      <Counter />
      <Namestatus />
      <Heroes />
      
      <Playbase />
    </>
  );
}

export default App;
