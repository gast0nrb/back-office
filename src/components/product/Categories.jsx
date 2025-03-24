const Categories = () => {
  return (
    <div className="w-full md:drop-shadow-lg xs:mt-0.5 md:mt-2">
      <h3 className="text-center text-indigo-300 font-bold">Categorización</h3>
      <div className="">
        <label className="font-bold" htmlFor="">
          Categoria
        </label>
        <select className="w-full bg-zinc-300 text-center" name="" id="">
          <option value="">categoria 1</option>
          <option value="">categoria 1</option>
          <option value="">categoria 1</option>
        </select>
      </div>
      <div>
        <label className="font-bold" htmlFor="">
          Subcategoria
        </label>
        <select className="w-full bg-zinc-300 text-center" name="" id="">
          <option value="">Subcategoria 1</option>
          <option value="">Subcategoria 1</option>
          <option value="">Subcategoria 1</option>
          <option value="">Subcategoria 1</option>
          <option value="">Subcategoria 1</option>
        </select>
      </div>
    </div>
  );
};

export default Categories;
