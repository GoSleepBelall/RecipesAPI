import React, {useEffect, useState} from 'react';
import Recipes from './Recipie';
import './App.css';

function App() {

  const APP_ID = "dc762f63";
  const APP_KEY = "d2e3c42ac3934bba0f33c4fc5d37f1d1";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');


useEffect(async ()=>{
  getRecipes();
}, [query]);

const getRecipes = async() => {
  const response =  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json(); //await is use with promises, such that whenever the data is not guranteed immideately we use await
  console.log(data);
  setRecipes(data.hits);
  console.log(data.hits);
}

const updateSearch = e =>{
  setSearch(e.target.value);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className = "App">
        <form onSubmit = {getSearch} className="search-form">
          <input onChange = {updateSearch} type = "text" className="search-bar"></input>
          <button  type = "submit" className="search-button">Search </button>
        </form>
        <div className="recipe">
          {recipes.map(recipes =>(
              <Recipes
              key={recipes.recipe.label}
              title={recipes.recipe.label} 
              calories={recipes.recipe.calories}
              image={recipes.recipe.image}
              ingredients = {recipes.recipe.ingredients}
              />
          ))}
        </div>
    </div>
  );
}

export default App;
