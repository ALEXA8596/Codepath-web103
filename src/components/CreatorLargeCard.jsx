// represents a creator
// name, url, desc, imageURL

import React from "react";

export default function Creator({ data }) {
  console.log("creator data: ", data);
  return (
    <div className="creator" style={{ padding: "20px"}}>
      <img src={data.imageURL} />
      <h1>
        <a href={"/view/" + data.name}>{data.name}</a>
      </h1>
      <p>{data.description}</p>

      <a href={data.url} style={{ paddingRight: "20px" }}>Social Media</a>
      <a href={"/edit/" + data.name}>Edit</a>
    </div>
  );
}

const styles = {};
