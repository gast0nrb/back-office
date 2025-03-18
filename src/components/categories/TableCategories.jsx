import ItemCategories from "./ItemCategories"

const TableCategories = () => {
    return (
        <table className="w-11/12 mx-auto text-sm">
            <tr>
                <th className="border-b-2">Id</th>
                <th className="border-b-2">Nombre</th>
                <th className="border-b-2 text-nowrap">Ver categoria</th>
            </tr>
            <ItemCategories/>
            <ItemCategories/>
            <ItemCategories/>
            <ItemCategories/>
            <ItemCategories/>
            <ItemCategories/>
        </table>
    )
}

export default TableCategories