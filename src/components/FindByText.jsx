const FindByText = () => {
    return (
        <>
           <form action="" className="w-4/12 mx-auto flex gap-2 mb-5 mt-2">
                <input className="text-center bg-neutral-100 drop-shadow-lg rounded-xs" type="text" placeholder="Filtrar por texto"/>
                <button className="bg-neutral-100 rounded-xs w-20 text-neutral-300 hover:text-black">¡Buscar!</button>
            </form> 
        </>
    )
}

export default FindByText;