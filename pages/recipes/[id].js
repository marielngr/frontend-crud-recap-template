import { useRouter } from "next/router";
import Image from "next/image";

export default function RecipePage({ getRecipe, toggleFavorite }) {
  const router = useRouter();
  console.log(router.query);
  const recipe = getRecipe(router.query.id);
  console.log(recipe);

  if (!recipe) {
    return "loading...!";
  }

  return (
    <>
      <h1>{recipe.name}</h1>
      {/* <Image src={recipe.img} alt="Cocktailbild" width={200} height={200} /> */}
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>{recipe.text}</p>
      <button onClick={() => toggleFavorite(router.query.id)}>Herz-Icon</button>
    </>
  );
}
