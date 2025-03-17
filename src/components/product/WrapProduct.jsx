import InfoProduct from "./InfoProduct"
import ProductImage from "./ProductImage"
import Categories from "./Categories"
import Values from "./Values"

const WrapProduct = () => {
    return (
        <div className="w-full px-2 bg-zinc-100 mt-5 md:flex xs:grid xs:grid-cols-1">
            <ProductImage/>
            <InfoProduct/>
        </div>
    )
}

export default WrapProduct