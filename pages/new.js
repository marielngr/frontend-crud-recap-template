import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewPage({ addRecipe }) {
  const router = useRouter();

  //warum async??
  async function handleSubmit(newRecipe) {
    addRecipe(newRecipe);

    //ggfls id abfragen und direkt zur neuen Seite pushen???
    router.push("/");
  }

  return (
    <>
      <h1>New Cocktail</h1>
      <Form onSubmit={handleSubmit} />
    </>
  );
}
