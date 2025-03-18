const ItemCategories = ({id=1, name="Default category"}) => {
    return (
        <tr className="text-center border-b-2 group">
            <td className="group-hover:text-orange-500">{id}</td>
            <td>{name}</td>
            <td className="w-20">
                <a href="/categoria">
                    <img src="/file.svg" alt=""  className="mx-auto md:mt-0 xs:mt-2 w-5"/>
                </a>
            </td>
        </tr>
    )
}

export default ItemCategories