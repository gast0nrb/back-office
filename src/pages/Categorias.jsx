import TableCategories from "../components/categories/TableCategories"
import FindByText from "../components/FindByText"
import Pagination from "../components/Pagination"
import Wrap from "../components/Wrap"

const Categorias = () => {
    return (
        <>
            <Wrap/>
            <h1 className="text-center text-xl font-bold">Listado categorias</h1>
            <FindByText/>
            <TableCategories/>
            <Pagination/>
        </>
    )
}

export default Categorias