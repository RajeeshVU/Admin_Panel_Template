import { FC } from 'react';
import Typography from '../../../components/typography/Typography';
import DoctorCard from './Doctorcard';
import ButtonComponent from '../../../components/button/Button';
import { useLocation } from 'react-router-dom';
import { useDoctorById } from './doctorById';
interface DoctorDetailsProps {
  
}

const DoctorDetails: FC<DoctorDetailsProps> = ({}) => {

  const url=useLocation()
  const queryParams = new URLSearchParams(url.search);
  const id = queryParams.get("id");

  const {data}=useDoctorById(id)
  return (
    <>
       <div className="p-2">
        <Typography
          label={"Doctors Details"}
          className="mt-0  bg-sideBar text-white text-center ml-0 py-3 text-lg"
        />
          
  <div className="text-black grid gap-3 grid-cols-1">
    {
      data? <DoctorCard data={data.data} />:<></>
    }
    
   
  </div>

        </div>
    </>
  );
};

export default DoctorDetails;