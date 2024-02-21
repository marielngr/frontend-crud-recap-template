import Link from "next/link";

// name your list resource in the page props
// and map over it to render it
export default function IndexPage({ recipes }) {
  return (
    //wie Icon einbinden?
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
