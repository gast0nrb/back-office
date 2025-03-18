import Feature from "./Feature";

const Features = () => {
  return (
    <>
      <div className="flex justify-center text-sm">
        <button className="pt-0.5 flex">
          Caracteristicas
          <img className="w-5" src="/add.svg" alt="" />
        </button>
      </div>
      <div className="bg-neutral-100 drop-shadow-xl w-8/12 mx-auto p-1">
            <Feature/>
            <Feature feature="color"/>
            <Feature feature="voltaje"/>
            <Feature feature="year"/>
      </div>
    </>
  );
};

export default Features;
