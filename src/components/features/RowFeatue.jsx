import { useState } from "react";
import ItemRowFeature from "./ItemRowFeature";
import NewRowFeature from "./NewRowFeature";

const RowFeature = ({nameFeature="Test caracteristica", category="Test category"}) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <tr classname="bg-neutral-500 w-full">
                <th className="bg-neutral-200  font-normal">{category}</th>
                <th className="bg-neutral-200">
                </th>
            </tr>
            <ItemRowFeature nameFeature={nameFeature}/>
            <ItemRowFeature nameFeature={nameFeature}/>
            <ItemRowFeature nameFeature={nameFeature}/>
            {
                show ?
            <button onClick={(e)=> setShow(false)}>
                <img src="/add.svg" alt="" className="w-3 mt-0.5"/>
            </button>
                :
                <button onClick={(e)=> setShow(true)}>
                    <img src="/close.svg" alt="" className="w-3 mt-0.5"/>
                </button>
            }
            {
                show ?
                    <></>
                :
                    <NewRowFeature setShow={setShow}/>
            }
        </>
    )
}

export default RowFeature;