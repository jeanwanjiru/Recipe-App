import { useState, useEffect } from "react";
import Instructions from "./Instructions";

const Home = () => {
  const [meals, setMeals] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMeals, setSearchedMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleSearch = () => {
    // Perform search here using the 'searchQuery'
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setSearchedMeals(data.meals));
  };

  return (
    <div>
      <div className="border rounded-lg lg:w-3/4 ml-64 h-full w-md p-8 px-8 bg-gray-300 w-md text-center justify-center align-center">
        <h1 className="text-white">Hello</h1>
        <h2 className="text-white">Would you like to cook today?</h2>
        <input
          type="text"
          placeholder=""
          className="border rounded-full p-2 mx-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-200 rounded-full px-3 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
       
        <div className="flex  flex-wrap -mx-4 space-x-3  ">
          {searchedMeals &&
            searchedMeals.map((meals) => (
              <img
                key={meals.idMeal}
                src={meals.strMealThumb}
                alt={meals.strMeal}
                style={{ width: "100px", height: "100px" }}
              />
            ))}
          <p>{meals.strMeal}</p>
        </div>
      </div>


    </div>
  );
};

export default Home;
