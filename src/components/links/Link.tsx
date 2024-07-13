import { FC } from 'react';
import { Link } from 'react-router-dom';
interface LinksProps {
  icon:React.ReactNode,
  label:string,
  to:string
}

const Links: FC<LinksProps> = ({icon,label,to}) => {
  return (
    <>
       <div className="link flex gap-6 py-1  align-middle text-link_text text-lg justify-start hover:bg-slate-700 hover:text-white rounded-sm px-3">
        <span className='flex text-lg items-center'>{icon}</span>
        <Link to={to} className=''>{label}</Link>
        </div>
    </>
  );
};

export default Links;