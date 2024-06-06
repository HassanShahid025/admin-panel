import SearchBar from "./SearchBar"
import messageIcon from '../assets/Group 81.svg'
import settingIcon from '../assets/Group 80.svg'
import notificatonIcon from '../assets/Group 79.svg'


const Navbar = () => {
  return (
    <div className='w-full h-20 flex items-center justify-between'>
        <h2 className="font-bold pl-5 text-2xl">Dashboard</h2>
        <div className="flex gap-5 pr-5">
            <SearchBar />
            <img src={messageIcon} className="cursor-pointer" alt="" />
            <img src={settingIcon} className="cursor-pointer" alt="" /> 
            <img src={notificatonIcon} className="cursor-pointer" alt="" />
        </div>
    </div>
  )
}

export default Navbar