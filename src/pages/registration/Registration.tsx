import { FC, useRef, useState } from "react";
import Typography from "../../components/typography/Typography";
import RegistrationForm from "../../components/forms/registrationForm/RegistrationFrom";
import { registrationApi } from "./registrationApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AlertBox from "../../components/alert/Alert";
import axios from "axios";

interface RegistrationProps {}

const Registration: FC<RegistrationProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [print, setPrint] = useState(false);
  const [clear, setClear] = useState(false);
  const [type, setType] = useState("");
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<string | undefined>("");
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    setType("loading");
    setOpen(true);
    try {
     
     
     const response:any = await registrationApi( data);
     if(response)
     {
      setType("success");
      setMessage("Registration Successful");
      setTimeout(() => {
        setOpen(false);
        setPrint(true);
        navigate(0)
      }, 2000);
     }
     
    } catch (error: any) {
      setOpen(false);
      if (error) {
        toast.error(error.response?.data?.message?.toString());
      }
    }
  };
  return (
    <>
      <AlertBox open={open} message={message} type={type} />
      <div
        className={`w-full   transition-all ease-out  delay-200 h-full absolute ${print == true ? "flex" : "hidden"}  z-40 flex justify-center items-center bg-blue-gray-500 bg-opacity-85`}
      >
        <div
          className={`${type == "loading" ? "" : "animate-alertAnimation"}
      border-teal-500 border-2 gap-2 flex flex-col justify-center rounded-md items-center ${type == "loading" ? "bg-alertBg" : "bg-white"} h-[20%] w-[20%]  p-2   border-green-700`}
        >
          <div className="">
            <p>Print Token ?</p>
          </div>
         
        </div>
      </div>
      <div className="p-2">
        <Typography
          label={"Registration"}
          className="mt-0 bg-sideBarBg text-white text-center ml-0 py-3 text-lg"
        />
        <RegistrationForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Registration;
