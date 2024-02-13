import React, { useState } from "react";

function SearchFunc() {
  const [mcu, setMCU] = useState([
    { title: "Iron Man", year: 2008 },
    { title: "The Incredible Hulk", year: 2008 },
    { title: "Iron Man 2", year: 2010 },
    { title: "Thor", year: 2011 },
    { title: "Captain America: The First Avenger", year: 2011 },
    { title: "The Avengers", year: 2012 },
    { title: "Iron Man 3", year: 2013 },
    { title: "Thor: The Dark World", year: 2013 },
    { title: "Captain America: The Winter Soldier", year: 2014 },
    { title: "Guardians of the Galaxy", year: 2014 },
    { title: "Avengers: Age of Ultron", year: 2015 },
    { title: "Ant-Man", year: 2015 },
    { title: "Captain America: Civil War", year: 2016 },
    { title: "Doctor Strange", year: 2016 },
    { title: "Guardians of the Galaxy Vol. 2", year: 2017 },
    { title: "Spider-Man: Homecoming", year: 2017 },
    { title: "Thor: Ragnarok", year: 2017 },
    { title: "Black Panther", year: 2018 },
    { title: "Avengers: Infinity War", year: 2018 },
    { title: "Ant-Man and The Wasp", year: 2018 },
    { title: "Captain Marvel", year: 2019 },
    { title: "Avengers: Endgame", year: 2019 },
    { title: "Spider-Man: Far From Home", year: 2019 },
    { title: "WandaVision", year: 2021 },
    { title: "The Falcon and the Winter Soldier", year: 2021 },
    { title: "Loki", year: 2021 },
    { title: "Black Widow", year: 2021 },
    { title: "Shang-Chi and the Legend of the Ten Rings", year: 2021 },
    { title: "Eternals", year: 2021 },
    { title: "Spider-Man: No Way Home", year: 2021 },
  ]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const filteredMCU = mcu.filter((m) =>
    m.title.toLowerCase().startsWith(inputValue.toLowerCase())
  );
  return (
    <div className="ml-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-black"
      />
      <ul>
        {filteredMCU.map((m, index) => (<li key={index}>{m.title} {m.year} </li>))}
      </ul>
    </div>
  );
}

export default SearchFunc;
