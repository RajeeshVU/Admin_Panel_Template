import { FC, InputHTMLAttributes } from "react";
import { formatDate } from "../../utils/dateFormat";
import dateFormat, { masks } from "dateformat";
interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  containerProps?:string;
  error?:string;
}

const InputComponent: FC<InputComponentProps> = ({
  label,
  icon,
  containerProps,
  error,
  ...rest
}) => {


  return (
    
    <>
      <div className={`relative ${containerProps} ${error ==null ? "h-8 ":"h-9" }  delay-100   ease-in transition-all  `}>
        <input
          id="input"
          className="pl-2 peer 
           placeholder:text-teal-500  
          relative overflow-visible  
          placeholder:absolute 
          placeholder:top-2 
          text-teal-500
          focus:placeholder:delay-100  
           placeholder:delay-100
           
           focus:placeholder:-top-3 text-sm 
           focus:placeholder:text-xs
           placeholder:transition-all 
             w-full 
            py-2 h-8 rounded-sm focus:border-teal-500 
             border-2 outline-teal-500  border-blue-gray-200"
       
          {...rest}
        />
        <div className="absolute text-teal-500  top-2.5 !self-center right-3">
          {icon}
        </div>
        <div
          id="label"
          className={`absolute ${
            (rest.value == "" 
            ) && rest.type !== "date" && rest.type !== "time"
              ? "invisible"
              : "visible"
          }  h-[.8rem] text-xs left-2 p-0  ease-in text-teal-500 transition-all 
       bg-white 
      peer-focus:text-teal-500 -top-2 peer-focus:visible origin-bottom  peer-focus:delay-200
       `}
        >
          <p className="capitalize">{label}</p>
        </div>
        <p className={`text-xs  text-right w-full text-red-600 mr-1  t  lowercase`}>{error}</p>
      </div>
    </>
  );
};

export default InputComponent;
