import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initialRecipes from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [recipes, setRecipes] = useState(initialRecipes);
  console.log(recipes);

  return (
    <>
      <Nav />
      <main>
        <Component recipes={recipes} {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
