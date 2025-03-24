const Feature = ({ feature = "Test feature", value = "test value" }) => {
  return (
    <>
      <div className="mx-auto text-center bg-neutral-200 w-11/12 my-2 rounded-xs">
        <h3 className="font-bold">{feature}</h3>
        <button className="my-2 mx-auto">
          <img src="/delete.svg" className="w-5" alt="" />
        </button>
      </div>
    </>
  );
};

export default Feature;
