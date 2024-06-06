import logo from "../assets/logo.svg";
import dashboardIcon from "../assets/element-3.svg";
// import propertyIcon from "../assets/building-4.svg";
// import documentIcon from "../assets/clipboard-text.svg";
// import messageIcon from "../assets/sms.svg";
// import profileIcon from "../assets/frame.svg";
import agentIcon from "../assets/send-2.svg";
import customersIcon from "../assets/people.svg";
import avatar from "../assets/Avatar.png";
import bottomArrow from "../assets/Vector.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

// import { TbBuildingEstate } from "react-icons/tb";
// import { PiClipboardTextLight } from "react-icons/pi";
// import { BsSend } from "react-icons/bs";

type SidebarProps = {
  sideBarVisible: boolean
  setSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({sideBarVisible,setSideBarVisible}:SidebarProps) => {
  const [location, setLocation] = useState("/");
  const links = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      path: "/",
    },
    {
      name: "Agent",
      icon: agentIcon,
      path: "/agent",
    },
    {
      name: "Customers",
      icon: customersIcon,
      path: "/customers",
    },
  ];

  return (
    <div className={`w-1/5 flex flex-col justify-between min-h-screen z-50 bg-white ${sideBarVisible ? 'fill-left-to-right max-lg:w-2/5 max-md:w-3/5 max-sm:w-4/5 max-lg:fixed max-lg-top-0 max-lg-left-0 max-lg:shadow-xl' :'max-lg:hidden w-1/5'}`}>
      <div className="flex flex-col gap-20">
        <div className="flex justify-center items-center pt-5 max-lg:justify-around">
          <img src={logo} className="h-9" />
          <RxCross1 size={25} color="#FFBF20" onClick={() => setSideBarVisible(false)} className="cursor-pointer lg:hidden"/>
        </div>
        <div>
          <div className="flex flex-col gap-10">
            {links.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className="flex  gap-2"
                onClick={() => setLocation(link.path)}
              >
                
                  <div className={`w-1.5 h-9 rounded-tr rounded-br ${location === link.path ? "bg-[#FFBF20]" : ""}`}></div>
                
                <div
                  className={`flex items-center gap-5 ${
                    location === link.path ? "pl-7" : "pl-8"
                  }`}
                >
                  <img src={link.icon} alt={link.name} style={{
                    filter : location === link.path ? "brightness(0) saturate(100%) invert(80%) sepia(76%) saturate(2439%) hue-rotate(339deg) brightness(103%) contrast(101%)" : ""
                  }}/>
                  <p
                    className={`text-[#959595] text-sm ${
                      location === link.path ? "font-bold text-[#FFBF20]" : ""
                    }`}
                  >
                    {link.name}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-around pb-3">
        <div className="flex gap-3 text-sm">
          <img src={avatar} className="w-10"/>
          <div>
            <h5 className="font-bold">Asad Khan</h5>
            <p
              className="text-[#A9A9A9]"
            >
              Agent
            </p>
          </div>
        </div>
        <img src={bottomArrow} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
