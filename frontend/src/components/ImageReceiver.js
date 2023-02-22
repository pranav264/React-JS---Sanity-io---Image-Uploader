import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import client from "../client";

const query = `*[_type == "my_images"]{
    "imageURL": image.asset->url
}`;

const breakpoint = {
    default: 4, //Default number of rows
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

const ImageReceiver = () => {
  useEffect(() => {
    getImages();
  }, []);

  const [imageurl, setImageUrl] = useState([]);

  const getImages = () => {
    client
      .fetch(query)
      .then((res) => {
        setImageUrl(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Masonry className="m-10 p-5 border border-gray-200 flex shadow-lg" breakpointCols={breakpoint}>
      {imageurl?.map((url) => (
        <img src={url.imageURL} alt="imageURL" className=" border border-gray-300 rounded-sm" />
      ))}
    </Masonry>
    </>
  );
};

export default ImageReceiver;
