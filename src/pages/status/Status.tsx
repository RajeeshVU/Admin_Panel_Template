import { FC } from 'react';
import Typography from '../../components/typography/Typography';

interface StatusProps {
  
}

const Status: FC<StatusProps> = ({}) => {
  return (
    <>
       <Typography tag={'h1'} label={'Status'}/>
    </>
  );
};

export default Status;