import React from "react";
import { supabase } from "../client.js";

export default function AddCreator() {
  async function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const url = document.getElementById("url").value;
    const imageURL = document.getElementById("imageURL").value;

    supabase
      .from("creators")
      .insert([{ name: name, description: description, url: url, imageURL: imageURL }])
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      })
      .then(() => {
        window.location.href = "/view/" + name;
      });
  }

  return (
    <>
      <form style={{ marginTop: "30vh", height: "100vh" }}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" required />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" type="text" />
        </div>
        <div>
          <label htmlFor="url">Social Media Link: </label>
          <input id="url" type="text" />
        </div>

        <div>
          <label htmlFor="imageURL">Image URL: </label>
          <input id="imageURL" type="text" />
        </div>

        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </>
  );
}
