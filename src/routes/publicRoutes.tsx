import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import ResetPassword from '../features/resetPassword/ResetPassword';

interface PublicRoutesProps {
  
}

const PublicRoutes: FC<PublicRoutesProps> = ({}) => {
    
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/password__reset" element={<ResetPassword />} />   
      </Routes>
    </>
  );
};

export default PublicRoutes;
