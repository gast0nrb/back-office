const Filters = () => {
    return  (
        <>
            <div className="text-xs">
                <button className="block mx-auto w-fit px-2 bg-zinc-100 drop-shadow-lg rounded-xs">Ver filtros</button>
            </div>
            <form className="text-xs flex-wrap" action="">
                <label htmlFor="">Filtro de texto</label>
                <input type="text" placeholder="¿qué buscas?"/>
                <label htmlFor="">Categoria</label>
                <select name="" id="">
                    <option value="">Iluminación</option>
                    <option value="">Seguridad</option>
                </select>
                <label htmlFor="">Subcategoria</label>
                <select name="" id="">
                    <option value="">Iluminación</option>
                    <option value="">Seguridad</option>
                </select>
            </form>
        </>
    )
}

export default Filters;