import  { FC, ReactNode } from 'react';
import { Dialog } from '@material-tailwind/react';
import SuccessGif from '../../assets/logo/successGif.gif'
import ErrorGif from '../../assets/logo/errorGif.gif'
import ConnectGif from '../../assets/logo/connnectGif.gif'
import DialogProps from '@material-tailwind/react'
import LoadingGif from '../../assets/logo/loadingGif.gif'
export type AlertType = 'success' | 'error' | 'connection' | 'loading';
const gifMap: Record<string, string > = {
    success: SuccessGif,
    error: ErrorGif,
    connection:ConnectGif,
    loading:LoadingGif,
  };
  const colorMap: Record<string, string > = {
    success: "green-700",
    error: "red-500",
    connection:"gray-700",
    loading:"teal-500"
  };
interface AlertBoxProps   {
  message?:string ;
  image?:string | undefined;
  type?:AlertType | string;
  icon?:ReactNode;
  open?:boolean;
}

const AlertBox: FC<AlertBoxProps> = ({message,icon,type,open}) => {
    const gifUrl = gifMap[type?type :""] || '';
  

  return (
    <>
    <Dialog open={open ? open : false}  size='xs'  className={`flex outline-none overflow-hidden py-2 justify-center h-36 items-center ${type=="loading" ? "bg-alertBg" :'bg-white'}`}  handler={()=>{}} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      {/* <div className={`w-full   transition-all ease-out  delay-200    z-40 flex justify-center items-center `}> */}
      <div className={`${type=="loading" ? "" :'animate-alertAnimation'} relative border-0 h-full w-full gap-2 flex flex-col justify-center rounded-md items-center ${type=="loading" ? "bg-alertBg" :'bg-white'} h-[20%] w-[20%]  p-2 `} >
        {icon}
      
        {/* <div className="w-full flex relative justify-center overflow-hidden "> */}
        <div className="w-[80%]">
        <img src={gifUrl} className=' h-full  object-cover'  alt="image_alert" />
        </div>
       
        {/* </div> */}
       
     
        <p className={`absolute  text-sm ${type=="loading" ? "text-blue-700" :'text-gray-800'} bottom-0`}>{ type=='loading' ? "Loading..." :message}</p>
      </div>
      {/* </div> */}
      </Dialog>
    </>
  );
};

export default AlertBox;