import ProductElement from "./ProductElement"

const InfoProduct = () => {
    return (
        <div className="mr-auto w-full">
            <h2 className="text-center text-indigo-300 font-bold">Información del producto</h2>
            <ProductElement title={"SKU"}/>
            <ProductElement title={"Imagen"}/>
            <ProductElement title={"Barra"}/>
            <ProductElement title={"Titulo"}/>
            <div className="grid grid-cols-1 xs:w-full md:w-11/12 px-2">
                <label className="font-bold" htmlFor="">Descripción</label>
                <textarea name="" id="" className="bg-zinc-200 rounded-xs"></textarea>
            </div>
        </div>
    )
}

export default InfoProduct