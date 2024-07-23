import { FC } from 'react';
import Typography from '../../../components/typography/Typography';
import AdmissionTable from './AdmissionTable';

interface AdmissionDetailsProps {
  
}

const AdmissionDetails: FC<AdmissionDetailsProps> = ({}) => {
  return (
    <>
     <div className="p-2">
        <Typography
          label={"Admission Records"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
        <AdmissionTable/>
        
        </div>
    </>
  );
};

export default AdmissionDetails;