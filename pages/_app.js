import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initialRecipes from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [recipes, setRecipes] = useState(initialRecipes);

  function getRecipe(id) {
    return recipes.find((recipe) => recipe.id == id);
  }

  return (
    <>
      <Nav />
      <main>
        <Component recipes={recipes} getRecipe={getRecipe} {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
