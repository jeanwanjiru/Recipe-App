import { useState } from "react";
import { useParams } from "react-router-dom";
const Instructions = () => {
  const [item, setItem] = useState();
  const { mealId } = useParams();
  if (mealId != "") {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  return (
    <>
      (
      <>
        <div className="content">
          <img src={item.strMealThumb} alt="" />
          <div className="innerContent">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea}food</h2>
            <h3>Category{item.strCategory}</h3>
          </div>
        </div>
        <div className="recipeDetails">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <h4>
              {item.strIngredient1}:{item.strMeasure1}
            </h4>
            <h4>
              {item.strIngredient2}:{item.strMeasure}
            </h4>
            <h4>
              {item.strIngredient3}:{item.strMeasure3}
            </h4>
            <h4>
              {item.strIngredient4}:{item.strMeasure4}
            </h4>
            <h4>
              {item.strIngredient5}:{item.strMeasure5}
            </h4>
            <h4>
              {item.strIngredient6}:{item.strMeasure6}
            </h4>
            <h4>
              {item.strIngredient7}:{item.strMeasure7}
            </h4>
            <h4>
              {item.strIngredient8}:{item.strMeasure8}
            </h4>
          </div>
        </div>
      </>
      )
    </>
  );
};
export default Instructions;
