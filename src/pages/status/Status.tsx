import { FC } from 'react';
import Typography from '../../components/typography/Typography';
import ButtonComponent from '../../components/button/Button';
import AppointmentForm from '../../components/forms/appointmentForm/AppointmentForm';

interface StatusProps {
  
}

const Status: FC<StatusProps> = ({}) => {
  return (
    <>
   <div className="p-2">
        <Typography
          label={"Status"}
          className="mt-0 bg-teal-500  text-white text-center ml-0 py-3 text-lg"
        />
     
        <div className="text-left relative flex  justify-center items-center py-1  bg-teal-500   mt-3   text-md">
   <input placeholder="Enter Id/Phone" className="!h-6 w-[20%] pl-3"/>
          
          <ButtonComponent
            className="flex  items-center text-gray-800  text-sm justify-center w-[10%]  !h-6 bg-blue-gray-100"
            type="button"
            label="Search"
          />


        </div>
      <AppointmentForm/>
      </div>
    </>
  );
};

export default Status;