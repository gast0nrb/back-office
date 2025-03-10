const Menu = () => {
  return(
    <div className="">
      <button>
        <img className="mt-0.5 w-6" src="/menu.svg" alt="menu"/>
      </button>
      <div hidden>
        <h3>Menu</h3>
        <ul>
          <li>Productos</li>
          <li>Listado</li>
          <li>Ficha de producto</li>
          <li>Catalogo</li>
        </ul>
        <ul>
          <li>Categorización</li>
          <li>Listado categorias</li>
          <li>Ficha categoria</li>
          <li>Listado subcategorias</li>
          <li>Ficha subcategorias</li>
          <li>Caracteristicas</li>
        </ul>
        <ul>
          <li>Listado usuarios</li>
          <li>Crear usuario</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;
