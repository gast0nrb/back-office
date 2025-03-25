import Features from "../components/category/Features";
import CategoryValues from "../components/category/CategoryValues";
import Wrap from "../components/Wrap";
import Confirm from "../components/product/Confirm";

const Categoria = () => {
  return (
    <>
      <Wrap />
      <h2 className="text-center font-bold text-xl">CATEGORIA</h2>
      <CategoryValues />
      <Confirm />
    </>
  );
};

export default Categoria;
