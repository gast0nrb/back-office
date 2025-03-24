import TableCategories from "../components/categories/TableCategories";
import FindByText from "../components/FindByText";
import Pagination from "../components/Pagination";
import Wrap from "../components/Wrap";

const Subcategorias = () => {
  return (
    <>
      <Wrap />
      <h1 className="text-center text-xl font-bold">Lista de subcategorias</h1>
      <FindByText />
      <TableCategories name={"subcategoria"} />
      <Pagination />
    </>
  );
};

export default Subcategorias;
