import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function Recipe() {
  const { mealid } = useParams();
  const [meal, setMeal] = useState(null);

  // Coordinates for areas
  const areaCoordinates = {
    American: { lat: 37.0902, lng: -95.7129 },
    British: { lat: 55.3781, lng: -3.436 },
    Canadian: { lat: 56.1304, lng: -106.3468 },
    Chinese: { lat: 35.8617, lng: 104.1954 },
    Dutch: { lat: 52.3676, lng: 4.9041 },
    Egyptian: { lat: 26.8206, lng: 30.8025 },
    French: { lat: 46.6034, lng: 1.8883 },
    Greek: { lat: 39.0742, lng: 21.8243 },
    Indian: { lat: 20.5937, lng: 78.9629 },
    Irish: { lat: 53.1424, lng: -7.6921 },
    Italian: { lat: 41.8719, lng: 12.5674 },
    Jamaican: { lat: 18.1096, lng: -77.2975 },
    Japanese: { lat: 36.2048, lng: 138.2529 },
    Kenyan: { lat: -0.0236, lng: 37.9062 },
    Malaysian: { lat: 4.2105, lng: 101.9758 },
    Mexican: { lat: 23.6345, lng: -102.5528 },
    Moroccan: { lat: 31.7917, lng: -7.0926 },
    Russian: { lat: 61.524, lng: 105.3188 },
    Spanish: { lat: 40.4637, lng: -3.7492 },
    Thai: { lat: 15.87, lng: 100.9925 },
    Tunisian: { lat: 33.8869, lng: 9.5375 },
    Turkish: { lat: 38.9637, lng: 35.2433 },
    Unknown: { lat: 0, lng: 0 },
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [mealid]);

  if (!meal) return <h2>Loading...</h2>;

  // Get coordinates for map
  const coords = areaCoordinates[meal.strArea] || areaCoordinates.Unknown;

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{meal.strMeal}</h1>

      {/* Recipe Image */}
      <img src={meal.strMealThumb} alt={meal.strMeal} className="recipe-img" />

      {/* Area displayed below the image */}
      {meal.strArea && (
        <div className="recipe-area">
          <strong>Area:</strong> {meal.strArea}
        </div>
      )}

      {/* Instructions */}
      <div className="recipe-info">
        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
      </div>

      {/* YouTube Link */}
      {meal.strYoutube && (
        <div className="youtube-section">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-btn"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      )}

      {/* Map using coordinates */}
      {coords && (
        <div className="map-container">
          <iframe
            title="meal-map"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=5&output=embed`}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Recipe;
