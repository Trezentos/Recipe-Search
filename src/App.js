import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = 'a0d07931'
  const APP_KEY = '03844f680e6080a00adede17be4145e4'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch ] = useState('');
  const [query, setQuery] = useState("rice")

  useEffect( ()=>{
   getRecipes();
  }, [query]) 
  
  const getRecipes = async () =>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  };

  
  const updateSearch = e =>{
    setSearch(e.target.value);
    
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button  className="search-button" type="submit" >
           Search
        </button>
      </form>
        <div className="recipes">
        {recipes.map(recipe=>(
          <Recipe 
          title = {recipe.recipe.label}
          image = {recipe.recipe.image }
          key = {recipe.recipe.label}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )

}

export default App;
