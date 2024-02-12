import React, { useState } from "react";

function SearchFunction() {
  const [myArray, setArray] = useState([
    "Sergio Ramos",
    "Iker Casillas",
    "Xabi Alonso",
    "Cristiano Ronaldo",
    "Karim Benzema",
    "Gareth Bale",
    "Toni Kroos",
    "Luka Modric",
    "Carvajal"
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredPlayers = myArray.filter((player) =>
    player.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div className="ml-4">
      <input
        type="text"
        className="border border-black"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFunction;
