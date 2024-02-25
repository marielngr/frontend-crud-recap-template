import { Fragment } from "react";
//Aufgabe dieser Komponente ist Darstellung + Dateneingabe für ein Rezept (new/edit)
//die Form entscheidet aber nicht, was mit den eingegebenen Daten geschehen soll und benötigt
//daher die Informationen, was mit den eingegebenen Daten passieren soll (onSubmit)
//Die Weitergabe der Formdaten erfolgt durch die Übergabe der Daten an die onSubmit-Funktion.

export default function Form({ onSubmit, recipe = {} }) {
  // ={} recipe ist ein default value, falls keine recipe-property übergeben wurde (Neuanlage statt Bearbeitung), damit nicht Fehler undefined

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const ingredients = formData
      .getAll("ingredients[]") // get all values for the identical key "ingredients[]"
      .filter((ingredient) => ingredient.trim() !== ""); // Remove empty strings

    const data = Object.fromEntries(formData.entries());
    data.ingredients = ingredients; // make sure to include the ingredients in the data object
    onSubmit(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Bild-URL <br />
          <input name="img" defaultValue={recipe.img}></input>
        </label>
        <br />
        <label>
          Name <br />
          <input name="name" required defaultValue={recipe.name}></input>
        </label>
        <br />
        <label>
          Ingredients <br />
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => {
              return (
                <Fragment key={index}>
                  <input
                    id={index}
                    name="ingredients[]"
                    defaultValue={ingredient}
                  ></input>
                  <br />
                </Fragment>
              );
            })}
          <input name="ingredients[]"></input>
          <br />
        </label>
        <label>
          Description
          <textarea name="text" required defaultValue={recipe.text}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
