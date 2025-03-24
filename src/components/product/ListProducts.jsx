import Filters from "../products/Filters";
import ItemProducts from "./ItemProducts";

const ListProducts = () => {
  return (
    <>
      <h2 className="text-center font-bold tracking-wide">Listado productos</h2>
      <Filters />
      <table className="text-xs w-full mx-auto text-gray-700 my-5">
        <tr className="grid  xs:grid-cols-3 md:grid-cols-5 border-b-2 mx-2">
          <th>Sku</th>
          <th>Titulo</th>
          <th className="xs:hidden md:block">Categoria</th>
          <th className="xs:hidden md:block">Subcategoria</th>
          <th>Ver</th>
        </tr>
        <ItemProducts />
        <ItemProducts />
        <ItemProducts />
        <ItemProducts />
        <ItemProducts />
      </table>
    </>
  );
};

export default ListProducts;
