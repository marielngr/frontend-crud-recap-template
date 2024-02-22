import Form from "@/components/Form.js";
import { useRouter } from "next/router";

export default function EditForm({ getRecipe }) {
  const router = useRouter();
  const recipe = getRecipe(router.query.id);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      ingredients: [],
    };

    for (let [name, value] of formData) {
      if (name == "ingredients") {
        if (value) data.ingredients.push(value);
      } else data[name] = value;
    }

    console.log("hier sind die daten", data);
  }
  if (!recipe) {
    return <div>Loading</div>;
  }
  return <Form onSubmit={handleSubmit} recipe={recipe} />;
}
