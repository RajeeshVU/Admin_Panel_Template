import { FC } from 'react';
import Typography from '../../../components/typography/Typography';
import ImageComponent from '../../../components/imageComponent/ImageComponent';
import SampleImg from '../../../assets/user/about.png'
import { RxTokens } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import ButtonComponent from '../../../components/button/Button';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Table from '../../../components/table/Table';
interface DoctorCardProps {
  
}

const DoctorCard: FC<DoctorCardProps> = ({}) => {
  return (
    <>
       
  <div className="mt-4 p-0 flex">
  <div className="relative flex flex-row mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
  
  <div className="p-3 w-full flex flex-col ">
    <div className="flex gap-2 justify-end ">
    <Link to={'/doctors/details/edit'}
      className="align-middle flex gap-2 bg-green-600  h-4 px-2 py-3 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
    <FaRegEdit /> 
    </Link>
    <Link to={'/remove'}
      className="align-middle bg-red-700 flex gap-2 h-4 px-2 py-3 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
   <MdDeleteOutline />
    </Link>
    </div>

  <div className="flex mb-2 gap-3">
  <ImageComponent src={SampleImg} className='!object-cover w-[50%] h-full'/>
    <div className="">
    <Typography
          label={"Profile"}
          className="mt-0    ml-0 text-xl"
        />
    <span className="flex items-baseline">Name :<Typography
          label={"Rahul"}
          className="mt-0    ml-0 text-xl font-semibold"
        /></span>
         <span className="flex items-baseline">Dept :
         <Typography
          label={"Ophtalmology"}
          className="mt-0    ml-0 text-md"
        />
         </span>
   <span className='flex'> Room No:
   <Typography
          label={"10"}
          className="mt-0    ml-0 text-md"
        />
   </span>
   <span className='flex'> Fees:
   <Typography
          label={"100"}
          className="mt-0    ml-0 text-md"
        />
   </span>
    </div>
   
  </div>
  <div className="p-0 !w-full pt-0 flex flex-row gap-3">
    <Link to={'/'}
      className="align-middle w-[50%] flex gap-2 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
    <RxTokens size={15}/>  Book 
    </Link>
    <Link to={'/'}  className="align-middle w-[50%] flex gap-2 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-300 text-gray-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" >
    <FaArrowLeft />  <Typography
          label={"Back"}
          className="mt-0    ml-0 text-md"
        />
    </Link>
 
  </div>
        
         <Typography
          label={"Education"}
          className="mt-0  text-center   ml-0 text-md"
        />
       
    
        <Table  table_head={["Hospital","10:00 AM","10:00 AM"]} table_rows={[{day:"hospital",start:"Start Time",end:"End Time"}]}/>
        <Typography
          label={"Experience"}
          className="mt-0 w-full text-center   ml-0 text-md"
        />
   <Table table_head={["Hospital","10:00 AM","10:00 AM"]} table_rows={[{day:"hospital",start:"Start Time",end:"End Time"}]}/>
       
        <Typography
          label={"TimeSlots"}
          className="mt-0  text-center   ml-0 text-md"
        />
      <Table table_head={["Mon","10:00 AM","10:00 AM"]} table_rows={[{day:"Day",start:"Start Time",end:"End Time"}]}/>
        
  </div>
  
</div>  
  </div>
        
       
    </>
  );
};

export default DoctorCard;