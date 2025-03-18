const Feature = ({feature="Test feature", value="test value"}) => {
    return(
        <>
            <div className="mx-auto text-center bg-neutral-200 w-11/12 my-2 border-2 border-indigo-200 rounded-xs">
                <div className="flex justify-center gap-2 py-1">
                    <h3 className="font-bold">{feature}</h3>
                    <button>
                        <img src="/delete.svg" className="w-5" alt="" />
                    </button>
                </div>
                <div className="flex justify-center gap-0.5 px-1 border-t-1 border-neutral-400">
                    <input className="text-center bg-neutral-300 rounded-xs my-1 w-11/12" type="text" value={value}/>
                    <button className="block">
                        <img className="w-5" src="/ok.svg" alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Feature;