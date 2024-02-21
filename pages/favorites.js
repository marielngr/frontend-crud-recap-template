import Link from "next/link";

export default function Favorites({ recipes }) {
  return (
    <>
      <h1>Cheers & Salute!</h1>
      <h2>Mix your personal Favourites!</h2>
      <ul>
        {
          recipes
            .filter((recipe) => {
              return recipe.isFavorite;
            })
            .map(({ id, name }) => (
              <li key={id}>
                <Link href={`/recipes/${id}`}>{name}</Link>
              </li>
            ))
          //filter gibt doch nur true/false zurück? wie heißt array, über das map geht?
        }
      </ul>
    </>
  );
}
