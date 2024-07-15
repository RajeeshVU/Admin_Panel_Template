import React, { FC } from 'react';
import Typography from '../../components/typography/Typography';

interface NotificationProps {
  
}

const Notification: FC<NotificationProps> = ({}) => {
  return (
    <>
       <Typography tag={'h1'} label={'Notification'}/>
    </>
  );
};

export default Notification;