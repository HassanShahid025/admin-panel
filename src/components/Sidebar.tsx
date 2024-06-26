import logo from "../assets/logo.svg";
import dashboardIcon from "../assets/element-3.svg";
// import propertyIcon from "../assets/building-4.svg";
// import documentIcon from "../assets/clipboard-text.svg";
// import messageIcon from "../assets/sms.svg";
// import profileIcon from "../assets/frame.svg";
import agentIcon from "../assets/send-2.svg";
import customersIcon from "../assets/people.svg";
import avatar from "../assets/Avatar.png";
import profile from "../assets/profile.svg";
import bottomArrow from "../assets/Vector.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

// import { TbBuildingEstate } from "react-icons/tb";
// import { PiClipboardTextLight } from "react-icons/pi";
// import { BsSend } from "react-icons/bs";

const Sidebar = () => {
  const [location, setLocation] = useState("/");
  const navigate = useNavigate();
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
    <>
      {/* // {Sidebar for laptop and desktop} */}
      <div
        className={`w-1/5 flex flex-col justify-between min-h-screen z-50 bg-white max-lg:hidden`}
      >
        <div className="flex flex-col gap-20">
          <div className="flex justify-center items-center pt-5">
            <img
              src={logo}
              className="h-9 cursor-pointer"
              onClick={() => navigate("/")}
            />
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
                  <div
                    className={`w-1.5 h-9 rounded-tr rounded-br ${
                      location === link.path ? "bg-[#FFBF20]" : ""
                    }`}
                  ></div>

                  <div
                    className={` flex items-center gap-5 ${
                      location === link.path ? "pl-7" : "pl-8"
                    }`}
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      style={{
                        filter:
                          location === link.path
                            ? "brightness(0) saturate(100%) invert(80%) sepia(76%) saturate(2439%) hue-rotate(339deg) brightness(103%) contrast(101%)"
                            : "",
                      }}
                    />
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

        {/* {Anas wala div} */}
        <div className="flex justify-around pb-3  max-lg:hidden">
          <div className="flex gap-3 text-sm">
            <img src={avatar} className="w-10" />
            <div>
              <h5 className="font-bold">Asad Khan</h5>
              <p className="text-[#A9A9A9]">Agent</p>
            </div>
          </div>
          <img src={bottomArrow} className="cursor-pointer w-5" />
        </div>
      </div>

      {/* // {Bottombar for mobile} */}
      <div className="fixed bottom-0 flex items-center py-5 z-20 justify-around w-screen shadow-2xl bg-white lg:hidden">
        {links.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className="flex gap-2 "
            onClick={() => setLocation(link.path)}
          >
            <div className={`flex flex-col items-center gap-2`}>
              <img
                src={link.icon}
                alt={link.name}
                style={{
                  filter:
                    location === link.path
                      ? "brightness(0) saturate(100%) invert(80%) sepia(76%) saturate(2439%) hue-rotate(339deg) brightness(103%) contrast(101%)"
                      : "",
                }}
              />
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
        <NavLink
          to={"/profile"}
          className="flex gap-2"
          onClick={() => setLocation("/profile")}
        >
          <div className={` flex flex-col items-center gap-2`}>
            <img
              src={profile}
              alt={"Profile"}
              style={{
                filter:
                  location === "/profile"
                    ? "brightness(0) saturate(100%) invert(80%) sepia(76%) saturate(2439%) hue-rotate(339deg) brightness(103%) contrast(101%)"
                    : "",
              }}
            />
            <p
              className={`text-[#959595] text-sm ${
                location === "/profile" ? "font-bold text-[#FFBF20]" : ""
              }`}
            >
              {"Profile"}
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
