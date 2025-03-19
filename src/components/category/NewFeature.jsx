const NewFeature = ({show}) => {
  return (
    <>
      <div className="mx-auto text-center w-11/12 bg-zinc-200 drop-shadow-lg mb-2" hidden={show}>
        <h3 className="font-bold">Nueva caracteristica</h3>
        <div>
          <select
            className="text-center border-1 border-neutral-400 bg-neutral-200 rounded-xs my-1 w-11/12"
            type="text"
            value="value"
          >
            <option value="">Cualidad 1</option>
            <option value="">Cualidad 1</option>
            <option value="">Cualidad 1</option>
          </select>
        </div>
        <div>
          <input
            className="text-xs text-center border-1 border-neutral-400 bg-neutral-200 rounded-xs my-1 w-11/12"
            type="text"
            value=""
            placeholder="Ingresa un valor para la caracteristica"
          />
          <button className="opacity-40 hover:opacity-100 flex mx-auto gap-0.5 rounded-xs px-10 bg-neutral-400 font-black text-xs">
            Agregar cualidad
            <img className="w-5" src="/ok.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewFeature;
