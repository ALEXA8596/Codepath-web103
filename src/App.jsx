import { useState, useEffect } from "react";
import { useRoutes } from "react-router";

// import pages
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";

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
      <section className="center">
        <h1>Creatorverse</h1>
        <h3>A database of your favorite content creators</h3>
      </section>

      <hr />
      <section className="center">
        {loading ? (
          <p>Loading</p>
        ) : creators.length > 0 ? (
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "20px",
              gridTemplateRows: "2",
            }}
          >
            {creators.map((creator) => {
              return <Creator key={creator.name} data={creator} />;
            })}
          </div>
        ) : (
          <p>No creators found</p>
        )}
        <a href="/add">
          <button>Add a Creator</button>
        </a>
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
