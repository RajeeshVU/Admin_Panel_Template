import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admissions from './components/Admissions';
import AdmissionDetails from './components/AdmissionDetails';

interface AdmissionRoutesProps {
  
}

const AdmissionRoutes: FC<AdmissionRoutesProps> = ({}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Admissions/>}/>
        <Route path='/records' element={<AdmissionDetails/>}/>
      </Routes>
    </>
  );
};

export default AdmissionRoutes;