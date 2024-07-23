
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../badge/Badge';
interface AdmissionCardProps  {
  badgeLabel?:string | number;
  label?:string;
  bg?:string;
  link?:string;
}

const AdmissionCard: FC<AdmissionCardProps> = ({badgeLabel,label,bg,link}) => {
  return (
    <>
       <div className="relative inline-flex " style={{ backgroundImage: `url(${bg})` }}>
            <Badge className="absolute right-0 -top-2  text-white rounded-full bg-black px-4 py-2 flex " label={badgeLabel}/>
            <Link to={`${link}`} className={`${bg} rounded-md h-20 w-full flex justify-center items-center `}>
           {label} </Link>
            </div>
    </>
  );
};

export default AdmissionCard;