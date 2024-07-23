import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import DoctorDetails from './components/DoctorDetails';
import DoctorList from './components/DoctorList';
import AddDoctor from './components/EditDoctor';
import EditDoctor from './components/EditDoctor';

interface DoctorRouteProps {
  
}

const DoctorRoute: FC<DoctorRouteProps> = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/details" element={<DoctorDetails />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/details/edit" element={<EditDoctor />} />
      </Routes>
    </>
  );
};

export default DoctorRoute;