import { ButtonStyleTypes } from "@material-tailwind/react";
import { FC } from "react";

interface ButtonComponentProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label?: string;
  type?: "submit" | "button" | "reset";
  name?: string;
  className?:string;
  children?:React.ReactNode;
  operation?:()=>void
  disabled?:boolean;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  operation,
    children,
  label,
  type,
  name,
  className,
  disabled,
  ...rest
}) => {
   
  return (
    <>
      {/* <div className="w-auto"> */}
        <button
        onClick={operation}
          className={className}
          type={type}
          data-dialog-target="dialog"
          name={name}
          {...rest}
          disabled={disabled}
          
        >
          {label}
          
         {children}
        
        </button>
      {/* </div> */}
    </>
  );
};

export default ButtonComponent;
