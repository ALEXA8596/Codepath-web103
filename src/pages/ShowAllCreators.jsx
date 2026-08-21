import { useState, useEffect } from "react";

import { supabase } from "../client.js";
import Creator from "../components/creator";

export default function ShowALlCreator() {
  const [loading, setLoading] = useState(true);

  const [creators, setCreators] = useState([]);


  useEffect(() => {
    async function fetchCreators() {
      setLoading(true);
      const { data, error } = await supabase.from("creators").select();
      if (error) {
        console.error("Error fetching creators:", error);
      }
      console.log("hiii");
      console.log(data);
      setCreators(data);
      setLoading(false);
    }
    fetchCreators();
  }, []);

  return (
    <section id="center">
      {loading ? (
        <p>Loading</p>
      ) : creators.length > 0 ? (
        creators.map((creator) => {
          return <Creator key={creator.name} data={creator} />;
        })
      ) : (
        <p>No creators found</p>
      )}
    </section>
  );
}
