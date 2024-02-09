import React, { useState } from "react";
//updating the state of an object
function Objects() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value })); //to create an object inside an arrow function do this way
  };
  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div className="ml-4 flex flex-col gap-4">
      <p className="text-xl font-bold">
        Your favorite car is : {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        className="w-[30%] border border-black"
      />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        className="w-[30%] border border-black"
      />
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        className="w-[30%] border border-black"
      />
    </div>
  );
}

export default Objects;
