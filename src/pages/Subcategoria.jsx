import Features from "../components/category/Features";
import CategoryValues from "../components/category/CategoryValues";
import Wrap from "../components/Wrap";
import Confirm from "../components/product/Confirm";

const Subcategoria = () => {
    return (
        <>
            <Wrap/>
            <h2 className="text-center font-bold text-xl">SUBCATEGORIA</h2>
            <CategoryValues/>
            <div className="mb-5 grid grid-cols-1 xs:w-10/12 md:w-6/12 mx-auto">
                <label htmlFor=""  className="-mb-4">
                    Categoria
                </label>
                <select className="text-center mt-6 w-full bg-neutral-200 block mx-auto">
                    <option value="">Ampolletas</option>
                    <option value="">Test category 1</option>
                    <option value="">Test category 1</option>
                    <option value="">Test category 1</option>
                    <option value="">Test category 1</option>
                    <option value="">Test category 1</option>
                </select>
            </div>
            <Features/>
            <Confirm/>
        </>
    )
}

export default Subcategoria;