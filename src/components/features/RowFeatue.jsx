import { useState } from "react";
import ItemRowFeature from "./ItemRowFeature";
import NewRowFeature from "./NewRowFeature";

const RowFeature = ({valueFeature="test value", nameFeature="Test caracteristica", category="Test category"}) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <tr classname="bg-neutral-500 w-full">
                <th className="bg-neutral-200  font-normal">{category}</th>
                <th className="bg-neutral-200">
                    {
                        show ? 
                        <>
                    <button
                        onClick={(e)=> setShow(false)}
                    className="w-4 mt-0.5">
                        <img className="" src="/add.svg" alt="" />
                    </button>
                    </>
                        : 
                        <>
                    <div>
                    <button className="w-4 mt-0.5"
                    onClick={(e)=> setShow(true)}>
                        <img className="" src="/ok.svg" alt="" />
                    </button>
                    <button className="w-4 mt-0.5"
                    onClick={(e)=> setShow(true)}>
                        <img className="" src="/close.svg" alt="" />
                    </button>
                    </div>
                        </>
                    }
                </th>
            </tr>
            <ItemRowFeature nameFeature={nameFeature} valueFeature={valueFeature}/>
            <ItemRowFeature nameFeature={nameFeature} valueFeature={valueFeature}/>
            <ItemRowFeature nameFeature={nameFeature} valueFeature={valueFeature}/>
            {
                !show ? 
                <NewRowFeature/>
                :
                <></>
            }
        </>
    )
}

export default RowFeature;