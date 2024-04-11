// Require the database connection
require("./db");

// Require the Car model
const Car = require("./models/car");

// Define function to add car data
async function addCarData() {
  const newCar = new Car({
    make: "Toyota",
    model: "Corolla",
    year: 2022,
  });

  try {
    const savedCar = await newCar.save();
    console.log("Car data saved successfully:", savedCar);
  } catch (error) {
    console.error("Error saving car data:", error);
  }
}

// Define function to add another car data
async function addAnotherCarData() {
  const anotherCar = new Car({
    make: "Honda",
    model: "Civic",
    year: 2023,
  });

  try {
    const savedAnotherCar = await anotherCar.save();
    console.log("Another car data saved successfully:", savedAnotherCar);
  } catch (error) {
    console.error("Error saving another car data:", error);
  }
}

// Define function to find all cars
async function findAllCars() {
  try {
    const allCars = await Car.find();
    console.log("All cars in the database:", allCars);
  } catch (error) {
    console.error("Error fetching all cars:", error);
  }
}

// Call functions to add car data, add another car data, and find all cars
addCarData();
addAnotherCarData();
findAllCars();
