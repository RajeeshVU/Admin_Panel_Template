import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '../typography/Typography';

interface BreadCrumbsProps {
  className?:string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({className}) => {
    const {pathname}=useLocation()
  return (
    <>
 <section className={`p-2 ${className}`} >
 <Typography tag={'h1'} className='ml-3'   label={`Dashboard/${pathname.split('/')[1]}`} />
 </section>
    
    </>
  );
};

export default BreadCrumbs;