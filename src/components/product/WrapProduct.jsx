import InfoProduct from "./InfoProduct";
import ProductImage from "./ProductImage";

const WrapProduct = () => {
  return (
    <div className="w-full mt-5 md:flex xs:grid xs:grid-cols-1">
      <ProductImage />
      <InfoProduct />
    </div>
  );
};

export default WrapProduct;
