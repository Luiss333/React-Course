/* const newMessage = {
  message: "Hola Mundo",
  title: "Luis",
}; */

/* const getResult = (a, b) => {
  return a + b;
};
 */
import PropTypes from "prop-types";

export const FirstApp = (/* props */ { title, subTitle }) => {
  // console.log(props);
  /* if (!title) {
    throw new Error("El título es necesario"); // Esto es para que el componente no se renderice si no se le pasa el título
  } */

  return (
    <>
      {/* <h1>Hola Mundo</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{getResult(1, 5)}</h1> */}
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  // Esto es para definir las propiedades que se le van a pasar al componente
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
};
