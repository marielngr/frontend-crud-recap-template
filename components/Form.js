import { Fragment } from "react";

export default function Form({ onSubmit, recipe = {} }) {
  // ={} recipe ist ein default value, falls keine recipe-property übergeben wurde (Neuanlage statt Bearbeitung), damit nicht Fehler undefined
  console.log(recipe);
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" required defaultValue={recipe.name}></input>
        </label>
        <br />
        <label>
          Ingredients
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <Fragment key={index}>
                <input name="ingredients" defaultValue={ingredient}></input>
                <br />
              </Fragment>
            );
          })}
          <input name="ingredients"></input>
          <br />
        </label>
        <label>
          Description
          <textarea
            name="description"
            required
            defaultValue={recipe.text}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
