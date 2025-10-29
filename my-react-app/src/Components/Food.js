import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Food = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const searchMeals = async () => {
    if (query.trim() === "") return;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  return (
    <div className="food-container">
      <h1 className="app-title">🍴 FOOD RECIPE APP</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search meals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMeals}>Search</button>
      </div>

      <p className="search-text">Search and Get Recipe's 👩‍🍳</p>

      <div className="meal-grid">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Link
              to={`/${meal.idMeal}`}
              className="meal-card"
              key={meal.idMeal}
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </Link>
          ))
        ) : (
          <p className="msg">Search something to see recipes...</p>
        )}
      </div>
    </div>
  );
};

export default Food;
