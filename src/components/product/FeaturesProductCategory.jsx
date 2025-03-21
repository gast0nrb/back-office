import FeatureProduct from "./FeatureProduct"

const FeaturesProductCategory = ({title}) => {
    return (
           <div className="text-center grid grid-cols-1">
                <h3 className="font-bold xs:text-left md:text-center">{title}</h3>
                <FeatureProduct/>
                <FeatureProduct/>
           </div> 
    )
}

export default FeaturesProductCategory