import Categories from "./Categories";
import Values from "./Values";

const WrapProduct2 = () => {
    return (
        <div className="md:grid md:grid-cols-2 xs:grid-cols-1 gap-2 w-11/12 mx-auto">
            <Categories/>
            <Values/> 
        </div>
    )
}

export default WrapProduct2;