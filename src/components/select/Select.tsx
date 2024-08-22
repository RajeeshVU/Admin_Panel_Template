import  { FC, SelectHTMLAttributes, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface SelectOption{
  label:string;
  value:string | number;
}
interface SelectDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?:string;
  options?:SelectOption[] | undefined;
  onChange:(value:any | undefined)=>void;
  value?:any;
  error?:string;
}
const SelectDropdown: FC<SelectDropdownProps> = ({value,options,error,onChange,placeholder}) => {
  const [open,setOpen]=useState(false)

  return (
    <>
        <div className={`relative w-full  ${error ==null ? "h-8 ":"h-9" } ease-in delay-100 transition-all`}>
        <button type='button'
          className="peer flex border-2 items-center border-blue-gray-200 focus:border-teal-500 w-full pl-2 h-8 text-sm py-2
         rounded-sm cursor-default text-teal-500"
         onBlur={()=>setOpen(false)}
         onClick={()=>setOpen(prev=>!prev)}>
          {value == "" ? "" : value?.charAt(0).toUpperCase() + value?.slice(1)}
          <div
          id="label"
          className={`absolute  h-[.8rem] text-sm left-2 p-0  ease-in text-teal-500 transition-all 
       bg-white 
      peer-focus:text-teal-500 ${
        value == "" ? "top-2" : "-top-2 text-xs "} peer-focus:visible origin-bottom  peer-focus:delay-200 peer-focus:text-xs peer-focus:-top-2`}
        >
          <p>{placeholder}</p>
        </div>
        </button>
        <IoIosArrowDown className="absolute right-3 text-teal-500 top-2 transition-all  peer-focus:rotate-180"  />
        <ul className={` absolute w-full h-20 overflow-y-scroll z-20 bg-white flex-col border-2 mt-1  ${open==false ? 'hidden' :'flex'} border-teal-500 `}>
          {options?.map(item => (
            <li
            
              className="px-1 text-teal-500 hover:bg-teal-500 hover:text-white"
              key={item.value}
              onMouseDownCapture={()=>onChange(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <p   className={`text-xs  text-right w-full text-red-600 mr-1    lowercase`}>{error}</p>
      </div>
    </>
  );
};

export default SelectDropdown;