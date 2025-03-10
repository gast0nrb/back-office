const ItemProducts = ({sku="00001", title="PRODUCTO DE PRUEBA", category={id : 0, name : "TEST CATEGORY"}, subcategory={id : 0, name : "TEST SBCATEGORY", fk_category : 0}}) => {
    return (
        <>
            <tr className="grid xs:grid-cols-3 md:grid-cols-5 border-b-1 text-center mx-2 group border-zinc-400">
                <td className="group-hover:text-orange-500 group-hover:font-bold">{sku}</td>
                <td>{title.toLowerCase()}</td>
                <td className="md:block xs:hidden">{category.name.toLowerCase()}</td>
                <td className="md:block xs:hidden">{subcategory.name.toLocaleLowerCase()}</td>
                <td className="w-5 mx-auto">
                    <a href="/producto">
                        <img src="/file.svg" alt="ver producto" className="mx-auto md:mt-0 xs:mt-2 w-5" />
                    </a>
                </td>
            </tr> 
        </>
    )
}

export default ItemProducts;