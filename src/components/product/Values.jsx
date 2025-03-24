const Values = () => {
  return (
    <div className="md:mt-2 xs:mt-0.5 drop-shadow-lg">
      <h3 className="text-center text-indigo-300 font-bold">Valores</h3>
      <div className="grid grid-cols-1">
        <label className="font-bold" htmlFor="">
          Detalle
        </label>
        <input type="number" className="bg-zinc-300 rounded-xs w-full mr-1" />
      </div>
      <div className="grid grid-cols-1">
        <label className="font-bold" htmlFor="">
          Descuento detalle
        </label>
        <input type="number" className="bg-zinc-300 rounded-xs w-full mr-1" />
      </div>
      <div className="grid grid-cols-1">
        <label className="font-bold" htmlFor="">
          Mayorista
        </label>
        <input type="number" className="bg-zinc-300 rounded-xs w-full mr-1" />
      </div>
      <div className="grid grid-cols-1">
        <label className="font-bold" htmlFor="">
          Descuento mayorista
        </label>
        <input type="number" className="bg-zinc-300 rounded-xs w-full mr-1" />
      </div>
      <div className="grid grid-cols-1">
        <label className="font-bold" htmlFor="">
          Cantidad mayorista
        </label>
        <input type="number" className="bg-zinc-300 rounded-xs w-full mr-1" />
      </div>
      <div className="grid grid-cols-1">
        <label htmlFor="" className="font-bold">
          Costo
        </label>
        <input type="number" className="bg-zinc-300 rounded-xs w-full mr-1" />
      </div>
    </div>
  );
};

export default Values;
