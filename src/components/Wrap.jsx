import Menu from "./Menu.jsx"
import User from "./User.jsx"

const Wrap = () => {
  return (
    <div className="grid grid-cols-2 w-full mx-auto bg-orange-500 px-3 mb-10">
      <Menu/> 
      <User/>
    </div>
  )
}

export default Wrap;
