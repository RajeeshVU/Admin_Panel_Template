import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
  type?: string;
  className?: string;
  labelClassName?: string; 
  errorMessage?: string; 
  rest?: React.InputHTMLAttributes<HTMLInputElement>; 
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  className = '',
  labelClassName = '',
  errorMessage,

 ...rest
}) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className={`text-gray-700 block mb-0 font-medium ${labelClassName || ''}`}
      >
        {label}
      </label>
      <input
        {...rest}
        id={name}
        name={name}
        type={type} 
        
        className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className || ''}`}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;