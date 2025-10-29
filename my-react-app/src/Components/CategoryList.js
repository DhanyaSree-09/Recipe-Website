import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  return (
    <div className="category-list">
      <h3>Meal Categories</h3>
      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            className="category-card"
            onClick={() => navigate(`/category/${cat.strCategory}`)}
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <p>{cat.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
