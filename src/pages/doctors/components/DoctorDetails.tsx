import { FC } from 'react';
import Typography from '../../../components/typography/Typography';
import DoctorCard from './Doctorcard';
import ButtonComponent from '../../../components/button/Button';
interface DoctorDetailsProps {
  
}

const DoctorDetails: FC<DoctorDetailsProps> = ({}) => {
  return (
    <>
       <div className="p-2">
        <Typography
          label={"Doctors Details"}
          className="mt-0  bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
          <div className="text-left relative flex  justify-center items-center py-1  bg-teal-500   mt-3   text-md">
   <input placeholder="Enter Id/Phone" className="!h-6 w-[20%] pl-3"/>
          
          <ButtonComponent
            className="flex  items-center text-gray-800  text-sm justify-center w-[10%]  !h-6 bg-blue-gray-100"
            type="button"
            label="Search"
          />
<select className='pl-2 !h-6 ml-5 w-[25%]'>
    <option value="">option 1</option>
    <option value="">option 1</option>
    <option value="">option 1</option>
</select>
<ButtonComponent
            className="flex  items-center text-gray-800  text-sm justify-center w-[10%]  !h-6 bg-blue-gray-100"
            type="button"
            label="Filter"
          />
        </div>
  <div className="text-black grid gap-3 grid-cols-3">
    <DoctorCard/>
    <DoctorCard/>
    <DoctorCard/>
  </div>

        </div>
    </>
  );
};

export default DoctorDetails;