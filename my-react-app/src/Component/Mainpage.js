import React, { useState } from "react";
import "../App.css";

function Mainpage() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  // Search meals
  const handleSearch = () => {
    if (search.trim() === "") return;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []); // handle no results
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  return (
    <div className="mainpage">
      <h1 className="title">🍽 FOOD RECIPE APP</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a meal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Search Results */}
      <div className="meal-results">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div className="meal-card" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </div>
          ))
        ) : (
          <p className="no-results">No meals found. Try searching!</p>
        )}
      </div>
    </div>
  );
}

export default Mainpage;
