const Button = (props) => {
  const { text, type } = props;
  if (type === "filled") {
    return (
      <button className="px-8 py-2 bg-white border-4 border-white justify-center items-center hover:border-blue-cyan hover:bg-blue-cyan text-base md:text-lg rounded-md font-normal">
        {text}
      </button>
    );
  }
  if (type === "outline") {
    return (
      <button className="px-8 py-2 bg-none border-4 border-blue-cyan justify-center items-center hover:border-white text-base md:text-lg text-white rounded-md font-normal">
        {text}
      </button>
    );
  }
};

export default Button;
