import TableFeatures from "../components/features/TableFeatures";
import Wrap from "../components/Wrap";
import Pagination from "../components/Pagination";

const Caracteristicas = () => {
  return (
    <>
      <Wrap />
      <TableFeatures />
      <Pagination />
      <h2 className="text-center font-bold text-xl pb-2">Agregar cualidad</h2>
      <div className="w-11/12 mx-auto text-xs grid grid-cols-1 gap-2 bg-neutral-100 drop-shadow-md rounded-xs py-2">
        <label htmlFor="" className="font-bold text-center">
          Nombre cualidad
        </label>
        <input
          type="text"
          placeholder="Ingresa un nombre para la cualidad"
          className="w-6/12 px-1 bg-zinc-200 rounded-xs drop-shadow-sm mx-auto text-center"
        />
        <button className="flex gap-1 mx-auto bg-neutral-200 w-fit px-2 border-x-1 border-neutral-500 hover:border-orange-500 text-neutral-500 hover:text-black">
          Guardar
          <img src="/ok.svg" alt="" className="w-4" />
        </button>
      </div>
    </>
  );
};

export default Caracteristicas;
