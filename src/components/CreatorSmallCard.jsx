// represents a creator
// name, url, desc, imageURL

import React from "react";

export default function Creator({ data }) {
  console.log("creator data: ", data);
  return (
    <article className="creator" style={{ padding: "20px", width: "30vh", height: "200px", border: "1px solid black", borderRadius: "10px"}}>
      <img src={data.imageURL} />
      <header>
        <a href={"/view/" + data.name}>{data.name}</a>
      </header>
      <p>{data.description}</p>

      <a href={data.url} style={{ paddingRight: "20px" }}>Social Media</a>
      <a href={"/edit/" + data.name}>Edit</a>
    </article>
  );
}

const styles = {};
