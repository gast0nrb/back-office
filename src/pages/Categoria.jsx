import Features from "../components/category/Features";
import CategoryValues from "../components/category/CategoryValues";
import Wrap from "../components/Wrap";

const Categoria = () => {
    return (
        <>
            <Wrap/>
            <h2 className="text-center font-bold text-xl">CATEGORIA</h2>
            <CategoryValues/>
            <Features/>
        </>
    )
}

export default Categoria;