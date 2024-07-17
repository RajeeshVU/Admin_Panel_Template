import { FC,} from "react";
import userIcon from "../../assets/user/user-01.png";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
interface HeaderProps {
  toggleMenu: () => void;
}

const Header: FC<HeaderProps> = ({toggleMenu}) => {
  
  return (
    <>
    
      <div className="h-[10%] sticky top-0  bg-white z-40  justify-between lg:justify-end md:justify-end w-full flex items-center shadow-md px-2">
      
        <div className="burger_menu block lg:hidden md:hidden   text-[#1c2434]">
          <RiMenuFill onClick={toggleMenu}/>
        </div>
       
        <div className="user_det hidden lg:flex md:flex   flex-col  ">
          <span className="text-[#1c2434] ">User Name</span>
          <span className="text-[#64748B] text-sm">User position</span>
        </div>
        
        <div className="flex  items-center justify-end gap-3 lg:justify-center md:justify-center sm:justify-end">
          
          <span className="rounded-full bg-white w-[30%]">
            <img src={userIcon} alt="" />
          </span>
          <span>
            <button className="text-slate-800">
              <IoIosArrowDown />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
