import { useState } from "react";

const Filters = () => {
    const [hide, setHide]  = useState(true)
    return  (
        <>
            <div className="text-xs my-1">
                <button
                 onClick={(e)=> setHide(!hide)}
                 className="block mx-auto w-fit px-2 bg-zinc-100 drop-shadow-lg rounded-xs">Ver filtros</button>
            </div>
            <form className=" gap-2 flex text-xs flex-wrap bg-neutral-100 drop-shadow-lg mx-auto p-1 xs:w-full md:w-2/3 text-center" hidden={hide} action="">
                <div className="w-11/12 mx-auto">
                    <label className="mr-2 font-semibold" htmlFor="">Filtro de texto</label>
                    <input className="bg-neutral-200 drop-shadow-lg rounded-xs placeholder:text-center" type="text" placeholder="¿qué buscas?"/>
                </div>
                    <div className="grid grid-cols-1 mx-auto">
                      <label className="font-semibold" htmlFor="">Categoria</label>
                        <select className="bg-neutral-200 px-1 rounded-sm" name="" id="">
                            <option value="">Iluminación</option>
                            <option value="">Seguridad</option>
                        </select>
                    </div>
                <div className="grid grid-cols-1 mx-auto">
                 <label className="font-semibold" htmlFor="">Subcategoria</label>
                    <select className="bg-neutral-200 px-1 rounded-sm" name="" id="">
                        <option value="">Iluminación</option>
                        <option value="">Seguridad</option>
                     </select>
                </div>
                <div className="w-full mx-auto">
                    <button className="mx-auto block w-fit px-1 rounded-xs border-y-2 bg-zinc-200 drop-shadow-xl border-amber-600 hover:border-orange-500 text-zinc-500 hover:text-black ">Aplicar filtros</button>
                </div>
            </form>
        </>
    )
}

export default Filters;
