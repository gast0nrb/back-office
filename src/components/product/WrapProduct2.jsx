import Categories from "./Categories";
import Values from "./Values";

const WrapProduct2 = () => {
    return (
        <div className="md:grid md:grid-cols-2 xs:grid-cols-1 px-2 bg-neutral-100 gap-2">
            <Categories/>
            <Values/> 
        </div>
    )
}

export default WrapProduct2;