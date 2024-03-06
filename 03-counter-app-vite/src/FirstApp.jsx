/* const newMessage = {
  message: "Hola Mundo",
  title: "Luis",
}; */

/* const getResult = (a, b) => {
  return a + b;
};
 */
export const FirstApp = (/* props */ { title, subTitle }) => {
  // console.log(props);
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
