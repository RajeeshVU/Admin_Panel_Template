import React, { FC, HTMLInputTypeAttribute } from "react";
import { Select, Option } from "@material-tailwind/react";
import { size, variant } from "./types";
import {
  containerProps,
  error,
  labelProps,
  shrink,
  success,
} from "@material-tailwind/react/types/components/input";
import { colors } from "@material-tailwind/react/types/generic";
interface SelectDropdownProps extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  variant?: variant;
  size?: size;
  color?: colors ;
  label?: string;
  error?: error;
  success?: success;
  icon?: React.ReactNode;
  labelProps?: labelProps;
  containerProps?: containerProps;
  className?: string;
  shrink?: shrink;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeHolder?: string;
  options?: string[];
 style?:React.CSSProperties;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  variant,
  color,
  className,
  name,
  labelProps,
  icon,
  shrink,
  inputRef,
  containerProps,
  success,
  error,
  label,
  placeHolder,
  options,
  style
 
}) => {
  return (
    <>
    
        <Select
        style={style}
          label={label}
          className={className}
          placeholder={placeHolder}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color={color}
          name={name}
          variant={variant}
          labelProps={labelProps}
          containerProps={containerProps}
        >
          {options?.map((item, index) => (
            <Option key={index}>{item}</Option>
          ))}
        </Select>
  
    </>
  );
};

export default SelectDropdown;
