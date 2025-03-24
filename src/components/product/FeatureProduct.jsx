const FeatureProduct = () => {
  return (
    <>
      <select
        name=""
        id=""
        className="w-11/12 mx-auto px-1 text-center bg-zinc-200 drop-shadow-md my-2"
      >
        <option value="">Color</option>
        <option value="">Voltaje</option>
        <option value="">Watts</option>
      </select>
      <input
        placeholder="Ingresa un valor"
        type="text"
        className="drop-shadow-md mt-1 w-11/12 mx-auto px-1 text-center bg-zinc-200 rounded-xs"
      />
    </>
  );
};

export default FeatureProduct;
