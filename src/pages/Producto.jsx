import Wrap from "../components/Wrap"
import Confirm from "../components/product/Confirm"
import WrapFeaturesProduct from "../components/product/WrapFeaturesProduct"
import WrapProduct from "../components/product/WrapProduct"
import WrapProduct2 from "../components/product/WrapProduct2"

const Producto = ({codigo="000001"}) => {
    return (
        <> 
            <Wrap/>
            <h1 className="text-center font-bold tracking-wide text-xl">Ficha articulo</h1>
            <form className="mb-5" action="">
                <WrapProduct/>  
                <WrapProduct2/>
                <WrapFeaturesProduct/>
                <Confirm/>
            </form>
        </>
    )
}

export default Producto
