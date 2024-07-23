import React, { FC } from 'react';

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?:String | number;
}

const Badge: FC<BadgeProps> = ({label,...rest}) => {
  return (
    <>
      <span {...rest}
    >
    {label}
  </span>
    </>
  );
};

export default Badge;