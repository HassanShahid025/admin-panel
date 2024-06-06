import SearchBar from "./SearchBar";
import messageIcon from "../assets/Group 81.svg";
import settingIcon from "../assets/Group 80.svg";
import notificatonIcon from "../assets/Group 79.svg";
import { RxHamburgerMenu } from "react-icons/rx";

type NavbarProps = {
  setSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setSideBarVisible }: NavbarProps) => {
  const openSideBar = () => {
    setSideBarVisible(true);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between">
      <h2 className="font-bold pl-5 text-xl max-lg:hidden">Dashboard</h2>
      <div className="pl-5">
        <RxHamburgerMenu
          size={25}
          color="#FFBF20"
          onClick={openSideBar}
          className="cursor-pointer lg:hidden"
        />
      </div>
      <div className="flex gap-5 pr-5">
        <SearchBar />
        <div className="flex gap-5 max-md:hidden">
          <img src={messageIcon} className="cursor-pointer" alt="" />
          <img src={settingIcon} className="cursor-pointer" alt="" />
          <img src={notificatonIcon} className="cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
