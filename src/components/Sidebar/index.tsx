import { FC } from "react";
import logo from "../../assets/logo/logo.svg";
import { MdDateRange } from "react-icons/md";
import Links from "../links/Link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { PiFilesDuotone } from "react-icons/pi";
import { MdAppRegistration } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
interface SideBarProps {
  status?: boolean | undefined;
  onCloseMenu: () => void;
}

const SideBar: FC<SideBarProps> = ({ status, onCloseMenu }) => {
  return (
    <>
      <div
        className={`bg-[#1c2434] h-screen
      text-white 
     top-0
      fixed
      left-0
      z-50
      transition-transform
      delay-100
      ease-linear
      ${status == true ? "translate-x-0" : "-translate-x-full"}
     md:static
     lg:w-[20%]
     md:w-[30%]
     sm:w-[30%]
     md:translate-x-0
     sm:-translate-x-full
    `}
      >
        <div className="logo_part h-[10%]  flex items-center">
          <span className="w-full flex justify-center  object-contain items-center py-2">
            <img className="h-fit w-[70%]" src={logo} alt="logo_image" />
          </span>
          <span className="block  justify-center  object-contain items-center p-2  md:hidden lg:hidden ">
            <IoMdClose className="text-xl" onClick={onCloseMenu} />
          </span>
        </div>

        <div className="nav_part  h-[90%]  flex  flex-col items-center">
          <div className="link_Container  text-link_text  flex gap-3 justify-start flex-col mt-20">
            <span className="border-b-link_text  border-b-2 text-lg p-2 w-full ">
              <h1>Menu</h1>
            </span>

            <Links
              icon={<MdDateRange />}
              label={"Appointment"}
              to={"/dashboard/appointment"}
            />
            <Links
              icon={<MdAppRegistration />}
              label={"Registration"}
              to={"/dashboard/registration"}
            />
            <Links
              icon={<PiFilesDuotone />}
              label={"Records"}
              to={"/dashboard/records"}
            />
            <Links icon={<FaBed />} label={"Admissions"} to={"/dashboard/admissions"} />
            <Links icon={<FaUserDoctor />} label={"Doctors"} to={"/dashboard/doctors"} />
            <Links
              icon={<IoIosNotificationsOutline />}
              label={"Notification"}
              to={"/dashboard/notifications"}
            />
            <Links icon={<IoSettingsOutline />} label={"Settings"} to={"/dashboard/settings"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
