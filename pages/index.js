import Link from "next/link";

export default function IndexPage({ recipes }) {
  console.log(recipes);
  return (
    <>
      <h1>🍸 Cheers & Salute! 🍹</h1>
      <h2>Mix fun and have a great time</h2>
      <ul>
        {recipes.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/recipes/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
