// represents a creator
// name, url, desc, imageURL

import React from "react";

export default function Creator({ data }) {
  console.log("creator data: ", data);
  return (
    <div
      className="creator"
      style={{
        maxWidth: "60vh",
        maxHeight: "70vh",
        border: "black",
        borderWidth: "3px",
      }}
    >
      <img src={data.imageURL} style={{
        maxHeight: "50vh"
      }}/>
      <h1>
        <a href={"/view/" + data.name}>{data.name}</a>
      </h1>
      <p>{data.description}</p>

      <a href={data.url} style={{ paddingRight: "20px" }}>
        Social Media
      </a>
      <a href={"/edit/" + data.name}>Edit</a>
    </div>
  );
}

const styles = {};
