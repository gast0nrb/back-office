import { useState } from "react";
import Feature from "./Feature";
import NewFeature from "./NewFeature";

const Features = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex justify-center text-sm">
        <button className="pt-0.5 flex" onClick={(e) => setShow(!show)}>
          {show ? "Agregar caracteristica" : "Cancelar nueva caracteristica"}
          <img className="w-5" src={show ? "/add.svg" : "/close.svg"} alt="" />
        </button>
      </div>
      <div className="bg-neutral-100 drop-shadow-xl w-10/12 mx-auto p-1">
        <Feature />
        <Feature feature="color" />
        <Feature feature="voltaje" />
        <Feature feature="year" />
        <NewFeature show={show} />
      </div>
    </>
  );
};

export default Features;
