// Every React component gets called with an argument, the common practice is to name it 'props' (short hand for properties)
const CardUsingProps = (props) => {
  // You do not need to destructure the incomming props,
  // but it usually results in cleaner code
  const { title, paragraph } = props;

  // To be able to use JavaScript inside our returned JSX we have to wrap it inside curly braces '{}'
  return (
    <article>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </article>
  );
};

// Remember to export the component as well
export default CardUsingProps;