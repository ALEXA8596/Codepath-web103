import React, { useState, useEffect } from "react";
import { supabase } from "../client.js";
import { useParams } from "react-router";

export default function EditCreator() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      setLoading(true);
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("name", id);
      if (error) {
        console.error("Error fetching creator:", error);
        setLoading(false);
        return;
      }
      if (data && data.length > 0) {
        setCreator(data[0]);
      } else {
        console.error("No creator found with the given name.");
      }
      setLoading(false);
    }
    fetchCreator();
  }, [id]);

  async function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const url = document.getElementById("url").value;
    const imageURL = document.getElementById("imageURL").value;

    supabase
      .from("creators")
      .upsert([
        { name: name, description: description, url: url, imageURL: imageURL },
      ])
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });

    if (creator && name !== creator.name) {
      supabase.from("creators").delete().eq("name", creator.name);
    }
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : creator ? (
        <div>
        <form style={{ marginTop: "30vh", height: "100vh" }}>
          <h1>Edit {creator.name}</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" defaultValue={creator.name} required />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              defaultValue={creator.description || ""}
            />
          </div>
          <div>
            <label htmlFor="url">Social Media Link: </label>
            <input id="url" type="text" defaultValue={creator.url || ""} />
          </div>

          <div>
            <label htmlFor="imageURL">Image URL: </label>
            <input id="imageURL" type="text" defaultValue={creator.imageURL || ""} />
          </div>

          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        </form>
        </div>
      ) : (
        <p>No creator found.</p>
      )}
    </>
  );
}
