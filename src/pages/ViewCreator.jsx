import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Creator from "../components/creator.jsx";
import { supabase } from "../client.js";

export default function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      setLoading(true);
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("name", id);

      if (error) {
        console.error("Error:", error);
      }

      if (data && data.length > 0) {
        setCreator(data[0]);
      }

      setLoading(false);
    }

    if (id) fetchCreator();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!creator) {
    return <p>No creator found.</p>;
  }

  return (
    <>
      {/* Pass the object as props, using a primitive string/number as the key */}
      <Creator key={creator.name} data={creator} />
    </>
  );
}