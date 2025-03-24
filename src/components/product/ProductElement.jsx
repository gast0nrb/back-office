const ProductElement = ({ title }) => {
  return (
    <>
      <div className="xs:grid xs:grid-cols-1 my-1 px-2">
        <label className="font-bold" htmlFor="">
          {title}
        </label>
        <input
          type="text"
          className="drop-shadow-xs bg-zinc-200 rounded-xs md:w-11/12"
        />
      </div>
    </>
  );
};

export default ProductElement;
