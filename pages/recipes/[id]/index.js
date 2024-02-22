import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function RecipePage({ getRecipe, toggleFavorite, onSubmit }) {
  const router = useRouter();
  console.log(router.query);
  const recipe = getRecipe(router.query.id);
  console.log(recipe);

  if (!recipe) {
    return "loading...!";
  }
  //icons können einfach aus der icon tabelle kopiert werden mac: ctrl + cmd + space
  return (
    <>
      <h1>{recipe.name}</h1>
      <Image src={recipe.img} alt="Cocktailbild" width={200} height={200} />
      <button onClick={() => toggleFavorite(router.query.id)}>
        {recipe.isFavorite ? "🩷" : "🖤"}
      </button>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>{recipe.text}</p>
      <Link href={`/recipes/${recipe.id}/edit`}>edit ✏️</Link>
    </>
  );
}
