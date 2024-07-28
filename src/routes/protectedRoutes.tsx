import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";

interface ProtectedRoutesProps {}
const Appointment = lazy(() => import("../pages/appointment/Appointment"));
const Registration = lazy(() => import("../pages/registration/Registration"));
const Records = lazy(() => import("../pages/records/Records"));
const AdmissionRoutes = lazy(() => import("../pages/admission/Route"));
const DoctorRoute = lazy(() => import("../pages/doctors/DoctorsRoute"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Notification = lazy(() => import("../pages/notification/Notification"));

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/records" element={<Records />} />
        <Route path="/admissions*" element={<AdmissionRoutes />} />
        <Route path="/doctors*" element={<DoctorRoute />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default ProtectedRoutes;
