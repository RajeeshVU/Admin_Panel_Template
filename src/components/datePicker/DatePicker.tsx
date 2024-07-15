
import React from 'react';

interface DateSelectorProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
  type?: string;
  className?: string;
  labelClassName?: string; 
  errorMessage?: string; 
  rest?: React.InputHTMLAttributes<HTMLInputElement>; 
}

const DateSelector: React.FC<DateSelectorProps> = ({
  label,
  name,
  type = 'text',
  className = '',
  labelClassName = '',
  errorMessage,

 ...rest
}) => {
  const isHoliday = (date: Date) => {
    // Implement your logic to determine holidays based on date (e.g., specific dates, recurring holidays)
    // ...
  
    return isHolidayFlag; // Return true if the date is a holiday, false otherwise
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);

    // Check if selected date is a holiday using the provided or custom function
    const isHolidayDate = isHoliday(selectedDate) || isHoliday.some(holiday => holiday.getTime() === selectedDate.getTime());
  };
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
        onChange={handleDateChange}
        className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className || ''}`}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default DateSelector;