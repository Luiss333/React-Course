import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} // Spread operator para enviar todas las propiedades de la imagen como argumentos
          />
        ))}
      </div>
    </>
  );
};
