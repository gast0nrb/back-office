const CollapsedMenu = ({ show, setShow }) => {
  return (
    <div
      id="collapsed-menu"
      className={`h-full fixed top-auto left-0 bg-neutral-100 overflow-hidden pt-1 duration-150 grid grid-cols-1 z-10 opacity-90
        ${!show ? "w-0" : "w-fit xs:px-5 md:px-10"}`}
    >
      <ul className="w-full">
        <li className="my-2 w-full hover:text-orange-500 text-center">
          <img src="/logo.png" alt="" className="w-20 mx-auto" />
        </li>
        <li className="my-2 w-full hover:text-orange-500">
          <a className="w-full h-min" href="/">
            Inicio
          </a>
        </li>
        <li>
          <p className="font-bold">Sección categorización</p>
        </li>
        <li className="my-2 w-full hover:text-orange-500">
          <a className="w-full h-min" href="/categorias">
            Categorias
          </a>
        </li>
        <li className="my-2 hover:text-orange-500">
          <a className="w-full h-min" href="/subcategorias">
            Subcategorias
          </a>
        </li>
        <li>
          <p className="font-bold">Sección producto</p>
        </li>
        <li className="my-2 hover:text-orange-500">
          <a className="w-full h-min" href="/productos">
            Listado productos
          </a>
        </li>
        <li className="my-2 hover:text-orange-500">
          <a className="w-full h-min" href="/producto">
            Ficha producto
          </a>
        </li>
        <li className="my-2 hover:text-orange-500">
          <a className="w-full h-min" href="/caracteristicas">
            Cualidades
          </a>
        </li>
        <li>
          <p className="font-bold">Sección administración</p>
        </li>
        <li className="my-2 hover:text-orange-500">
          <a className="w-full h-min" href="/#">
            Usuarios
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CollapsedMenu;
