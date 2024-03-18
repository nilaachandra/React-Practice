import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Namestatus from "./components/Namestatus";
import Heroes from "./components/Heroes";
import Playbase from "./components/Playbase";
import Objects from "./components/Objects";
import Arrays from "./components/Arrays";
import UpdateArrays from "./components/UpdateArrays";
import SearchFunction from "./components/SearchFunction";
import SearchFunc from "./components/SearchFunc";
import UseEffectP from "./components/UseEffectP";
import Reduxtk from "./components/Reduxtk";

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
      <Namestatus/>
      <Heroes/>
      <Playbase/>
      <Objects/>
      <Arrays/>
      <UpdateArrays/>
      <SearchFunction/>
      <SearchFunc/>
      <UseEffectP/>
      <div className="w-full h-screen">
        <Reduxtk/>
      </div>
    </>
  );
}

export default App;
