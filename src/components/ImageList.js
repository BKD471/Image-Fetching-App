import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  // we can only render an array of components or elements but not the array of objects as child of React element
  return <div className="image--list">{images}</div>;
};

export default ImageList;
