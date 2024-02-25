import Form from "@/components/Form.js";
import { useRouter } from "next/router";

//benötigt für ihre Aufgabe (Darstellung der Editseite) 2 Infos:
//1. Wie kann ich ein bestimmtes recipe(id) abrufen
//2. Was soll passieren, wenn recipe verarbeitet wurde
//die konkrete Dateneingabe für ein bestimmtes Rezept ist Aufgabe der Form-Componente,
//die Form-Komponente weiß wiederum nicht, wie man ein recipe abruft, sondern bekommt es als Datensatz übergeben.

export default function EditPage({ getRecipe, onUpdateRecipe }) {
  const router = useRouter();
  const recipe = getRecipe(router.query.id);

  async function handleSubmit(editedRecipe) {
    const updatedRecipe = {
      ...recipe,
      ...editedRecipe,
    };
    onUpdateRecipe(updatedRecipe);
    router.push(`/recipes/${recipe.id}`);
  }

  if (!recipe) {
    return "Loading...";
  }
  return (
    <>
      <h1>Edit Cocktail</h1>
      <Form onSubmit={handleSubmit} recipe={recipe} />
    </>
  );
}
