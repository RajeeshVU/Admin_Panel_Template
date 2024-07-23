import { FC } from 'react';
import Typography from '../../../components/typography/Typography';
import DoctorEditForm from '../../../components/forms/doctorForm/DoctorEditForm';

interface EditDoctorProps {
  
}

const EditDoctor: FC<EditDoctorProps> = ({}) => {
  return (
    <>
       <div className="p-2">
        <Typography
          label={"Edit Doctor"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
        
        <DoctorEditForm/>
        </div>
    </>
  );
};

export default EditDoctor;