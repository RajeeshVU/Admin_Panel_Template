import React from "react";

interface TypographyProps {
  tag?: React.ElementType<any>;
  className?: string;
  children?: React.ReactNode;
  styles?: React.HtmlHTMLAttributes<HTMLTextAreaElement>;
  label: string;
}

const Typography: React.FC<TypographyProps> = ({
  tag = "p",
  className = "",
  children,
  styles,
  label,
}: TypographyProps) => {
  return React.createElement(
    tag,
    { className: className, style:styles },
    <>
      {label}
      {children}
    </>
  );
};

export default Typography;
