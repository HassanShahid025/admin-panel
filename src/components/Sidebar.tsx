import logo from "../assets/logo.svg";
import dashboardIcon from "../assets/element-3.svg";
import propertyIcon from "../assets/building-4.svg";
import documentIcon from "../assets/clipboard-text.svg";
import agentIcon from "../assets/send-2.svg";
import messageIcon from "../assets/sms.svg";
import profileIcon from "../assets/frame.svg";
import customersIcon from "../assets/people.svg";
import avatar from "../assets/Avatar.png";
import bottomArrow from "../assets/Vector.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// import { TbBuildingEstate } from "react-icons/tb";
// import { PiClipboardTextLight } from "react-icons/pi";
// import { BsSend } from "react-icons/bs";

const Sidebar = () => {
  const [location, setLocation] = useState("/");
  const links = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      path: "/",
    },
    {
      name: "Property",
      icon: propertyIcon,
      path: "/property",
    },
    {
      name: "Document",
      icon: documentIcon,
      path: "/document",
    },
    {
      name: "Agent",
      icon: agentIcon,
      path: "/agent",
    },
    {
      name: "Message",
      icon: messageIcon,
      path: "/message",
    },
    {
      name: "Profile",
      icon: profileIcon,
      path: "/profile",
    },
    {
      name: "Customers",
      icon: customersIcon,
      path: "/customers",
    },
  ];

  return (
    <div className=" w-1/5 flex flex-col justify-between min-h-screen">
      <div className="flex flex-col gap-20">
        <div className="flex justify-center pt-5 ">
          <img src={logo} className="h-9" />
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
                  <img src={link.icon} />
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
