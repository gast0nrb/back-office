const CategoryValues = () => {
  return (
    <>
      <div className="grid grid-cols-1 xs:w-10/12 md:w-6/12 mx-auto">
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="">Id</label>
          <input type="text" className="px-1 bg-neutral-200 rounded-xs" />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="">Nombre</label>
          <input type="text" className="px-1 bg-neutral-200 rounded-xs" />
        </div>
      </div>
    </>
  );
};

export default CategoryValues;
