import RowFeature from "./RowFeatue";

const TableFeatures = () => {
    return (
        <>
            <h2 className="text-center text-xl font-bold">Cualidades</h2>
            <div className="w-11/12 mx-auto bg-neutral-100 grid xs:grid-cols-1 my-5">
                    <table className="text-xs mx-auto w-full text-center">
                       <tr className="text-xs">
                        <th className="xs:text-nowrap md:text-wrap"> Cualidad</th>
                        <th>Valor</th>
                        </tr> 
                        <RowFeature/>
                        <RowFeature category="Ampolleta" nameFeature="Color" valueFeature="Verde"/>
                        <RowFeature category="Plumillas" nameFeature="Material" valueFeature="Silicona"/>
                        <RowFeature/>
                    </table>
            </div>
        </>
    )
}

export default TableFeatures;