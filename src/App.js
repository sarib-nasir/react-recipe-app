import React ,{useEffect,useState} from "react";
import Recipe from "./Recipe";
import "./css/app.css"

function App() {
    const App_id = "a1a8a9e8";
    const App_key  = "1f717183c2a6981a5f5c753417d59bf2";

    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState("");
    const [query, setQuery] = useState('chocolate')
    useEffect(()=>{
        getRecipes();
    },[query]);

    const getRecipes = async() =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }
    const updateSearch = e=>{
        setSearch(e.target.value);
        console.log(search)
    }
    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit" >Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe =>(
                    <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories ={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
                ))}
            </div>
        </div>
    );

}

export default App;