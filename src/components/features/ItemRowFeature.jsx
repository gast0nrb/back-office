const ItemRowFeature = ({nameFeature, valueFeature}) => {
    return (
            <tr className="border-b-1 border-zinc-300 font-light">
                <td>{nameFeature}</td>
                <td>{valueFeature}</td>
            </tr>
    )
}

export default ItemRowFeature;