import { useState, useEffect } from "react";
import { useRoutes } from "react-router";

// import pages
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowAllCreators from "./pages/ShowAllCreators";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

// database
import { supabase } from "./client.js";
import Creator from "./components/CreatorSmallCard.jsx";

function Home() {
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
    <>
      <section id="center">
        <h1>Creatorverse</h1>
        <h3>A database of your favorite content creators</h3>
      </section>

      <hr/>
      <section id="center" style={{ display: "grid", gap: "20px", gridTemplateColumns: "200px", marginTop: "20px", gridTemplateRows: "2" }}>
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
    </>
  );
}

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: Home(),
    },
    {
      path: "/show-all",
      element: <ShowAllCreators />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/view/:id",
      element: <ViewCreator />,
    },
  ]);

  return routes;
}

export default App;
