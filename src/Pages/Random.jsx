import React from 'react'
import { useLoaderData, Link } from "react-router-dom";

export default function Random() {
  const giphyData = useLoaderData();
  console.log(giphyData);
  return (
    <div className="random-page">
      {giphyData ? (
        <>
        <h1>{giphyData.data.title}</h1>
        <img alt='image' src={giphyData.data.images.original.url}/>
        
        </>
      ) : (
        <div>This is the random page</div>
      )}
    </div>
  );
}

