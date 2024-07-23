
import { FC } from 'react';
import Typography from '../../components/typography/Typography';

interface NotificationCardProps {
  
}

const NotificationCard: FC<NotificationCardProps> = ({}) => {
  return (
    <>
    <div className="mt-2flex gap-3">
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md  rounded-xl w-full">
  <div className="p-6">
    <div className="">
        <Typography label={'Caption'} className='text-lg font-semibold'/>
        <Typography label={'02-01-2024  Thursday 10:30 AM'} className='text-md'/>
    </div>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
 
</div>
    </div>
   
    </>
  );
};

export default NotificationCard;