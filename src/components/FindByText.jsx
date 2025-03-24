const FindByText = () => {
  return (
    <>
      <form
        action=""
        className="w-10/12 flex gap-2 mb-5 mt-2 justify-center mx-auto"
      >
        <input
          className="md:w-4/12 xs:w-10/12 text-center bg-neutral-100 drop-shadow-lg rounded-xs"
          type="text"
          placeholder="Filtrar por texto"
        />
        <button className="bg-neutral-100 rounded-xs w-fit px-1 text-neutral-300 hover:text-black">
          ¡Buscar!
        </button>
      </form>
    </>
  );
};

export default FindByText;
