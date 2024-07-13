import { FC, useEffect, useState } from "react";
import logo from "../../assets/logo/logo.svg";
import { MdDateRange } from "react-icons/md";
import Links from "../links/Link";
import { GrStatusGood } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { PiFilesDuotone } from "react-icons/pi";
import { MdAppRegistration } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
interface SideBarProps {
  status?: boolean | undefined;
  onCloseMenu: () => void;
}

const SideBar: FC<SideBarProps> = ({status,onCloseMenu}) => {
  const [active, setActive] = useState<boolean>( true);


console.log(status)
  return (
    <>
     <div className={`bg-[#1c2434] h-dvh 
      text-white w-auto
      absolute
      left-0
      transition-transform
      delay-300
      ease-linear
      ${ status  ==true ? "translate-x-0" :"-translate-x-full"}
     md:static
     lg:w-1/4
     md:translate-x-0
     sm:-translate-x-full
    `}>
        <div className="logo_part h-[10%]  flex items-center">
          <span className="w-full flex justify-center  object-contain items-center py-2">
            <img className="h-fit w-[70%]" src={logo} alt="logo_image" />
          </span>
           <span className="hidden  justify-center  object-contain items-center p-2  md:hidden lg:hidden sm:flex">
           <IoMdClose className="text-xl" onClick={onCloseMenu}/>
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
              to={"/appointment"}
            />
            <Links
              icon={<MdAppRegistration />}
              label={"Registration"}
              to={"/registration"}
            />
            <Links
              icon={<PiFilesDuotone />}
              label={"Records"}
              to={"/records"}
            />
            <Links icon={<FaBed />} label={"Admissions"} to={"/admissions"} />
            <Links icon={<FaUserDoctor />} label={"Doctors"} to={"/doctors"} />
            <Links
              icon={<IoIosNotificationsOutline />}
              label={"Notification"}
              to={"/notifications"}
            />
            <Links icon={<GrStatusGood />} label={"Status"} to={"/status"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
