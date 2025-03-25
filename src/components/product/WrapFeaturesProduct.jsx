import FeaturesProductCategory from "./FeaturesProductCategory";

const WrapFeaturesProduct = () => {
  return (
    <div className="w-full p-1 grid grid-cols-1 text-sm mb-5 mt-2 pb-5">
      <h2 className="text-center text-indigo-300 font-bold md:col-span-2 text-lg">
        Cualidades producto
      </h2>
      <FeaturesProductCategory />
    </div>
  );
};

export default WrapFeaturesProduct;
