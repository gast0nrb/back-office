import ItemCategories from "./ItemCategories";

const TableCategories = ({ url = "/categoria" }) => {
  return (
    <table className="w-11/12 mx-auto text-sm">
      <tr>
        <th className="border-b-2">Id</th>
        <th className="border-b-2">Nombre</th>
        <th className="border-b-2 text-nowrap">Ver {name}</th>
      </tr>
      <ItemCategories url={name}/>
      <ItemCategories url={name}/>
      <ItemCategories url={name}/>
      <ItemCategories url={name}/>
      <ItemCategories url={name}/>
    </table>
  );
};

export default TableCategories;
