const Confirm = () => {
    return (
        <div className="w-full mx-auto grid grid-cols-2 text-xs font-bold">
            <button className="hover:bg-red-300 bg-red-50">Eliminar</button>
            <button className="hover:bg-blue-300 bg-blue-50">Editar</button>
            <button className="hover:bg-emerald-300 bg-emerald-50">Guardar</button>
            <button className="hover:bg-gray-300 bg-gray-50">Cancelar</button>
        </div>
    )
}

export default Confirm;