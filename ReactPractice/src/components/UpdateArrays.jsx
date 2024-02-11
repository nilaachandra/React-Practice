import React, { useState } from "react";

function UpdateArrays() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);
  };
  const handleRemoveCar = (index) => {
    setCars(c => c.filter((_,i) => i !== index));
  }
  const handleCarYear = (e) => {
    setCarYear(e.target.value);
  };
  const handleCarMake = (e) => {
    setCarMake(e.target.value);
  };
  const handleCarModel = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <div className="ml-4 flex flex-col">
      <h2>List of Car</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}{" "}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={carYear}
        className="w-[30%] border border-black"
        onChange={handleCarYear}
      />
      <input
        type="text"
        value={carMake}
        className="w-[30%] border border-black"
        onChange={handleCarMake}
      />
      <input
        type="text"
        value={carModel}
        className="w-[30%] border border-black"
        onChange={handleCarModel}
      />

      <button className="w-[30%] border border-black" onClick={handleAddCar}>
        add Car
      </button>
    </div>
  );
}

export default UpdateArrays;
