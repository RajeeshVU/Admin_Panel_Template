import { InputStylesType, Input } from "@material-tailwind/react";
import {
  error,
  success,
  labelProps,
  containerProps,
  shrink,
} from "@material-tailwind/react/types/components/input";
import React, { FC, HTMLInputTypeAttribute, useState } from "react";
import { variant, size, color } from "../select/types";

interface FileInputComponentProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
 
  className?: string;
 
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeHolder?: string;
  getData?: (File: File) => void;
}

const FileInputComponent: FC<FileInputComponentProps> = ({
  getData,

  className,
  name,
  type,
  ...rest
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      getData?.(file);
    }
  };
  return (
    <>
      <input
      {...rest}
        name={name}
        onChange={handleFileChange}
        className={className}
        id="file_input"
        type="file"
      />
    </>
  );
};

export default FileInputComponent;
