import FeaturesProductCategory from "./FeaturesProductCategory";

const WrapFeaturesProduct = () => {
  return (
    <div className="w-full p-1 grid md:grid-cols-2 xs:grid-cols-1 text-sm mb-5 mt-2 gap-2 pb-5">
      <h2 className="text-center text-indigo-300 font-bold md:col-span-2 text-lg">
        Cualidades
      </h2>
      <FeaturesProductCategory title={"Categoria"} />
      <FeaturesProductCategory title={"Subcategoria"} />
    </div>
  );
};

export default WrapFeaturesProduct;
