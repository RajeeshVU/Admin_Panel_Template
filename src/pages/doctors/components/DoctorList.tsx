
import { FC } from 'react';
import DoctorsTable from './DoctorsTable';
import Typography from '../../../components/typography/Typography';


interface DoctorListProps {
  
}

const DoctorList: FC<DoctorListProps> = ({}) => {
  return (
      <div className="p-2 relative">
        <Typography
          label={"Doctors Available"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
        <div className="!w-[90%] bg-blue-gray-500 relative">
        <DoctorsTable />
        </div>
          
        </div>
  );
};

export default DoctorList;