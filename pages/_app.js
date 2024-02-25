import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initialRecipes from "../data.json";
import "../styles/global.css";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [recipes, setRecipes] = useState(initialRecipes);

  //Aufgabe _app.js: andere Componenten mit Daten versorgen
  //andere Componenten sind für Darstellung (single responsibility principle)

  //hier könnte auch API-Aufruf ans Backend stehen
  function getRecipe(id) {
    return recipes.find((recipe) => recipe.id == id);
  }

  //CRUD-Funktionen für Verhalten
  //editRecipe
  function handleUpdateRecipe(updatedRecipe) {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  }

  //addRecipe
  function addRecipe(data) {
    console.log("newRecipe data:", data);
    const newRecipes = [...recipes, { id: nanoid(), ...data }];
    setRecipes(newRecipes);
    console.log("newRecipes", recipes.id);
  }

  //deleteRecipe

  function toggleFavorite(id) {
    setRecipes(
      recipes.map((recipe) => {
        //hier nur == statt ===, weil einmal String und einmal number!
        if (recipe.id == id) {
          return { ...recipe, isFavorite: !recipe.isFavorite };
        } else {
          return recipe;
        }
      })
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Component
          recipes={recipes}
          getRecipe={getRecipe}
          toggleFavorite={toggleFavorite}
          onUpdateRecipe={handleUpdateRecipe}
          addRecipe={addRecipe}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
