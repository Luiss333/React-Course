//import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  //console.log({ isLoading });
  //--------------------------------------------
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
