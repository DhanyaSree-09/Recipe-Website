import React from "react";
import MapComponent from "./Component/MapComponent";

function RecipeDetail({ meal }) {
  // Example hardcoded area coordinates
  const areaCoordinates = {
    Indian: { lat: 20.5937, lng: 78.9629 },
    Chinese: { lat: 35.8617, lng: 104.1954 },
    Italian: { lat: 41.8719, lng: 12.5674 },
    American: { lat: 37.0902, lng: -95.7129 },
  };

  const coords = areaCoordinates[meal.strArea] || { lat: 0, lng: 0 };

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="recipe-image"
      />

      <p>
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {meal.strArea}
      </p>

      <h2>Instructions</h2>
      <p className="instructions">{meal.strInstructions}</p>

      {/* Add Map */}
      <MapComponent
        lat={coords.lat}
        lng={coords.lng}
        placeName={meal.strArea}
      />

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="youtube-btn"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
}

export default RecipeDetail;
