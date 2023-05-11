import React, { useState } from 'react';
import Search from './Search';
import Meal from './Meal';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const searchMeal = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();

  if (data.meals) {
    setMeals(data.meals);
    setError('');
  } else {
    setMeals([]);
    setError(`No results found for "${query}"`);
  }
} catch (error) {
  console.error(error);
  setMeals([]);
  setError('An error occurred while fetching the data');
}
};

return ( <div className="App"> <h1>The Meal DB</h1> <Search searchMeal={searchMeal} /> {error && <p className="error">{error}</p>} {meals.length > 0 ? ( <div className="meals"> {meals.map((meal) => ( <Meal key={meal.idMeal} meal={meal} /> ))} </div> ) : ( <p className="no-results">No results found</p> )} </div> ); }

export default App;