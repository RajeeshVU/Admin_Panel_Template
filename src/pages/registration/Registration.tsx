import { FC } from 'react';
import Typography from '../../components/typography/Typography';
import RegistrationForm from '../../components/forms/registrationForm/RegistrationFrom';

interface RegistrationProps {
  
}

const Registration: FC<RegistrationProps> = ({}) => {
  return (
    <>
    <div className="p-2">
    <Typography
          label={"Registration"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
      <RegistrationForm/>
    </div>
      
    </>
  );
};

export default Registration;