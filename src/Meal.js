import React from 'react';

function Meal({ meal }) {
  return (
    <div className="meal">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <ul>
        {Object.keys(meal).map((key) => {
          if (key.startsWith('strIngredient') && meal[key]) {
            return <li key={key}>{meal[key]}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default Meal;
