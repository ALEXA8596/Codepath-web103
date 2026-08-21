import React from "react";
import { supabase } from "../client.js";

export default function AddCreator() {
  async function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const url = document.getElementById("url").value;
    const imageURL = document.getElementById("imageURL").value;

    if(!name) return alert("A name is required!")

    // check if supabase already has an element with the name "name"

    const { count, error} = await supabase
      .from('creators')
      .select()
      .eq('name', name);

    if(error) return alert("There was an error: " + error);

    if(count) return alert("The name already exists");
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
      <form style={{ marginTop: "10vh", height: "100vh", padding: "0 10vw" }}>
        <h1>Add a new Creator</h1>
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
