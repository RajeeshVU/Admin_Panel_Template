import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "@material-tailwind/react";
import type {
  InputProps,
  InputStylesType,
  InputVariantStylesType,
} from "@material-tailwind/react";

import {
  error,
  success,
  labelProps,
  containerProps,
  shrink,
} from "@material-tailwind/react/types/components/input";
import { color, size, variant } from "./types";

interface InputComponentProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  variant?: variant;
  size?: size;
  color?: color;
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
  getData?: (image: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  getData,
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
  type,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getData?.(e.target.value);
  };
  return (
   
 <Input
      type={type}
      placeholder={placeHolder}
      labelProps={labelProps}
      icon={icon}
      inputRef={inputRef}
      containerProps={containerProps}
      shrink={shrink}
      error={error}
      success={success}
      label={label}
      className={className}
      color={color}
      name={name}
      variant={'standard'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      crossOrigin={undefined}
     onChange={handleChange}
    {...rest}
    />
   
   
   
  );
};

export default InputComponent;
