import Form from '@/components/Form.js';
import { useRouter } from 'next/router';

export default function EditPage({ getRecipe, onUpdateRecipe }) {
  const router = useRouter();
  const recipe = getRecipe(router.query.id);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const ingredients = formData
      .getAll('ingredients[]') // get all values for the identical key "ingredient"
      .filter((ingredient) => ingredient.trim() !== ''); // Remove empty strings

    const data = Object.fromEntries(formData.entries());
    data.ingredients = ingredients; // make sure to include the ingredients in the data object

    const updatedRecipe = {
      ...recipe,
      ...data,
      ingredients,
    };
    onUpdateRecipe(updatedRecipe);
    router.push(`/recipes/${recipe.id}`);
  }

  if (!recipe) {
    return 'Loading...';
  }
  return (
    <>
      <h1>Edit Cocktail</h1>
      <Form onSubmit={handleSubmit} recipe={recipe} />
    </>
  );
}
