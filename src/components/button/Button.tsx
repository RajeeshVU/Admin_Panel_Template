import { ButtonStyleTypes } from "@material-tailwind/react";
import { FC } from "react";

interface ButtonComponentProps extends ButtonStyleTypes {
  label?: string;
  type?: "submit" | "button" | "reset";
  name?: string;
  className?:string;
  children?:React.ReactNode;
  operation?:()=>void
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  operation,
    children,
  label,
  type,
  name,
  className
}) => {
   
  return (
    <>
      <div className="">
        <button
        onClick={operation}
          className={className}
          type={type}
          data-dialog-target="dialog"
          name={name}
        >
          {label}
          
         {children}
        
        </button>
      </div>
    </>
  );
};

export default ButtonComponent;
