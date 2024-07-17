import React, { FC } from 'react';
import placeholderImg from '../../assets/user/dummy.webp'
interface ImageComponentProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  src?:string;
  containerClass?:string;
  className?:string;
  alt?:string;
}

const ImageComponent: FC<ImageComponentProps> = ({className,src,alt,...rest}) => {
  return (
    <>
   
      <img
        className={`${className}object-cover object-center   `}
        src={src? src :placeholderImg}
        alt={alt}
        {...rest}
        
      />
    
    </>
  );
};

export default ImageComponent;