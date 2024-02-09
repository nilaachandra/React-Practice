import React, { useState } from "react";
//manupulating an array of objects
const Arrays = () => {
  const [players, setPlayer] = useState([
    "Sergio Ramos",
    "Xabi Alonso",
    "Iker Casillas",
  ]);
minor cha
  const addPlayer = () => {
    const newPlayer = document.getElementById("playerInput").value;
    document.getElementById("playerInput").value = "";
    setPlayer((np) => [...np, newPlayer]);
  };

  const benchPlayer = (index) => {
    setPlayer(players.filter((_, i) => i !== index)); //using _ as a parameter signifies that the parameter is being ignored
  };

  return (
    <div className="ml-4">
      <p className="text-xl font-bold bg-black text-white w-[30%]">
        Real Madrid CF
      </p>
      <ul>
        {players.map((player, index) => (
          <li
            key={index}
            onClick={() => benchPlayer(index)}
            className="cursor-pointer"
          >
            {player}
          </li>
        ))}
      </ul>
      <input
        type="text"
        id="playerInput"
        placeholder="Enter Player Name"
        className="w-[30%] border border-black"
      />
      <button
        onClick={addPlayer}
        className="border-black border text-white bg-black"
      >
        Add Food
      </button>
    </div>
  );
};

export default Arrays;
