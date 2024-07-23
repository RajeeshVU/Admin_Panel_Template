import { FC } from 'react';
import Typography from '../../components/typography/Typography';
import NotificationCard from './NotificationCard';

interface NotificationProps {
  
}

const Notification: FC<NotificationProps> = ({}) => {
  return (
    <>
       <div className="p-2">
        <Typography
          label={"Notifications"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
        <NotificationCard/>
        <NotificationCard/>
        </div>
    </>
  );
};

export default Notification;