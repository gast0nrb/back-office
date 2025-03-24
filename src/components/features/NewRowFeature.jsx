const NewRowFeature = ({ setShow }) => {
  return (
    <>
      <tr>
        <th>
          <select
            name=""
            id=""
            className="bg-zinc-100 drop-shadow-sm px-1 mx-2 w-8/12 text-center mb-2"
          >
            <option value="">Voltaje</option>
          </select>
          <button onClick={(e) => setShow(true)}>
            <img src="/ok.svg" className="w-3" alt="" />
          </button>
        </th>
      </tr>
    </>
  );
};

export default NewRowFeature;
