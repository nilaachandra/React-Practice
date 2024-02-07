import React from "react";

function Playbase() {
  //we are mimicking a database array of objects
  const myHeroes = [
    { id: 1, name: "IronMan", firsAppeared: 2008 },
    { id: 2, name: "CaptainAmerica", firsAppeared: 2011 },
    { id: 3, name: "Thor", firsAppeared: 2011 },
    { id: 4, name: "BlackWidow", firsAppeared: 2009 },
    { id: 5, name: "Hulk", firsAppeared: 2008 },
    { id: 6, name: "Hawkeye", firsAppeared: 2011 },
  ];

  myHeroes.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical order
  // myHeroes.sort((a,b) => b.name.localeCompare(a.name)); //reverse-alphabetical order



//displaying data on the page
  const heroesList = myHeroes.map((hero) => (
    <li className="text-red-500 font-bold list-disc list" key={hero.id}>
      {hero.name} : <span className="font-bold">{hero.firsAppeared}</span>
    </li>
  ));



  return (
    <div className="ml-8">
      <h1>The next section mimicks a database</h1>
      <ul>{heroesList}</ul>
    </div>
  );
}

export default Playbase;
