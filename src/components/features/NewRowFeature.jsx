const NewRowFeature = () => {
    return (
        <>
            <tr>
                <th>
                    <select name="" id=""
                    className="bg-zinc-100 drop-shadow-sm px-1 mx-2 w-10/12 text-center">
                        <option value="">Voltaje</option>
                    </select>
                </th>
                <th>
                    <input type="text" placeholder="Ingresa un valor..." 
                    className="bg-zinc-100 drop-shadow-sm px-1 my-2 w-10/12 text-center"/>
                </th>
            </tr>
        </>
    )
}

export default NewRowFeature;