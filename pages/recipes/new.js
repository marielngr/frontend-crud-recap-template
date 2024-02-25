import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewPage({ addRecipe }) {
  const router = useRouter();

  //warum async??
  async function handleSubmit(newRecipe) {
    addRecipe(newRecipe);

    router.push(`/recipes/${newRecipe.id}`);
  }

  return (
    <>
      <h1>New Cocktail</h1>
      <Form onSubmit={handleSubmit} />
    </>
  );
}
