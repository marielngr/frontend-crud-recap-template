import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import initialRecipes from '../data.json';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const [recipes, setRecipes] = useState(initialRecipes);

  function getRecipe(id) {
    return recipes.find((recipe) => recipe.id == id);
  }

  function handleUpdateRecipe(updatedRecipe) {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  }

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
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
