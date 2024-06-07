import SearchBar from "./SearchBar";
import messageIcon from "../assets/Group 81.svg";
import settingIcon from "../assets/Group 80.svg";
import notificatonIcon from "../assets/Group 79.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import mobileLogo from '../assets/mobileLogo.svg'
import menu from '../assets/menu.svg'
import { BiMenuAltLeft } from "react-icons/bi";

type NavbarProps = {
  setSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setSideBarVisible }: NavbarProps) => {
  const openSideBar = () => {
    setSideBarVisible(true);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between max-md:justify-around">
      <img src={mobileLogo} className="lg:hidden pl-5 max-md:w-28 max-md:p-0"/>
      <h2 className="font-bold pl-5 text-xl max-md:text-sm max-lg:pl-0">Dashboard</h2>
      <div className="pl-5">
        <img
          src={menu}
          color="black"
          onClick={openSideBar}
          className="cursor-pointer pr-5 lg:hidden max-md:w-9 max-md:p-0"
        />
      </div>
      {/* <div className="flex gap-5 pr-5">
        <SearchBar />
        <div className="flex gap-5 max-md:hidden">
          <img src={messageIcon} className="cursor-pointer" alt="" />
          <img src={settingIcon} className="cursor-pointer" alt="" />
          <img src={notificatonIcon} className="cursor-pointer" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
