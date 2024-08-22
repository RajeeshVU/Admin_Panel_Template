import { FC, useState } from "react";
import Typography from "../../../components/typography/Typography";
import ImageComponent from "../../../components/imageComponent/ImageComponent";
import { Dialog } from "@material-tailwind/react";
import { RxTokens } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import ButtonComponent from "../../../components/button/Button";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Table from "../../../components/table/Table";

import { toast } from "react-toastify";
import AlertBox from "../../../components/alert/Alert";
import { removeDoctorApi } from "./deleteDoctorById";

interface Qualifications {
  year: number;
  university: string;
  degree: string;
  percentage: string;
}
interface Experience {
  hospital: string;
  position: string;
  startingDate: string;
  endingDate: string;
  tenure: number;
}
interface TimeSlots {
  day: string;
  startingTime: string;
  endingTime: string;
}
interface Data {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dept: string;
  room: number;
  fees: number;
  position: string;
  photo: string;
  phone: number;
  qualifications: Qualifications[];
  experience: Experience[];
  timeSlots: TimeSlots[];
}
interface DoctorCardProps {
  data: Data;
}

const DoctorCard: FC<DoctorCardProps> = ({ data }) => {
  const [type, setType] = useState("");
  const [print, setPrint] = useState(false);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
const navigate=useNavigate()
  const handleSubmit = async (data: any) => {

  try {
 
    setModal(false)
    setOpen(true);
    setType("loading");
    await removeDoctorApi(data);
    // if(response.status==true)
    // {
 setType("success");
    setMessage("Removed Successfully");
    setTimeout(() => {
      setOpen(false);
      setPrint(true);
      navigate(-1)
    }, 2000);
    
    // }
   
   
    } catch (error: any) {
      setOpen(false);
      if (error) {
        toast.error(error.response?.data?.message?.toString());
      }
    }
  };

  return (
    <>
    <AlertBox open={open} message={message} type={type}/>
      <Dialog
        open={modal}
        size="xs"
        className={`flex outline-none overflow-hidden py-2 justify-center h-36 items-center bg-white`}
        handler={() => {}}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div
          className={`w-full flex-col  transition-al gap-3 ease-out  delay-200 h-full absolute flex  z-40 justify-center items-center bg-opacity-85`}
        >
          <div className="w-full text-center">
            <p>Remove Doctor ?</p>
          </div>
          <div className="flex gap-3">
            <ButtonComponent
              className="flex justify-center bg-red-600 shadow-lg !text-white rounded-sm w-20 items-center p-2"
              onClick={()=>setModal(false)}
            >
              Close
            </ButtonComponent>
            <ButtonComponent
              className="flex justify-center items-center shadow-md bg-white rounded-sm p-2 w-20"
              onClick={()=>handleSubmit(data._id)}
            >
              Remove
            </ButtonComponent>
          </div>
        </div>
      </Dialog>
      <div className="mt-0 p-0 flex">
        <div className="relative flex flex-row mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
          <div className="p-3 w-full relative flex flex-row gap-3 ">
            <div className="flex flex-col w-[30%] h-full  mb-2 gap-3">
              <div className="flex relative h-full">
                <div className=" absolute flex gap-3 justify-end w-full">
                  <Link
                    to={`edit?id=${data._id}`}
                    className="align-middle  flex gap-2 mb-2 bg-green-600 w-10  h-10 px-2 py-3 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    <FaRegEdit />
                  </Link>
                  <ButtonComponent
                    onClick={()=>setModal(true)}
                    className="align-middle bg-red-700 flex gap-2 w-10 h-10 px-2 py-3 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    <MdDeleteOutline />
                  </ButtonComponent>
                </div>
                <ImageComponent
                  src={data.photo}
                  className="!object-scale-down w-[100%] h-auto "
                />
              </div>
              <div className="p-0 !w-full pt-0 flex flex-row gap-3">
                <Link
                  to={`/dashboard/appointment?id=${data._id}`}
                  className="align-middle w-[50%] flex gap-2 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                >
                  <RxTokens size={15} /> Book
                </Link>
                <Link
                  to={`/dashboard/doctors`}
                  className="align-middle w-[50%] flex gap-2 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-300 text-gray-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                >
                  <FaArrowLeft />{" "}
                  <Typography label={"Back"} className="mt-0    ml-0 text-md" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-[70%]">
              <div className="flex flex-col justify-center text-center">
                <Typography
                  label={"Profile"}
                  className="mt-0    ml-0 text-xl"
                />
                <div className="">
                  <div className="flex items-baseline justify-between">
                    <span className="flex items-baseline">
                      Name :
                      <Typography
                        label={`${data.firstName} ${data.lastName}`}
                        className="mt-0    ml-0 text-xl font-semibold"
                      />
                    </span>
                    <span className="flex items-baseline">
                      Dept :
                      <Typography
                        label={`${data.dept}`}
                        className="mt-0    ml-0 text-md"
                      />
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="flex">
                      {" "}
                      Room No:
                      <Typography
                        label={`${data.room}`}
                        className="mt-0    ml-0 text-md"
                      />
                    </span>
                    <span className="flex">
                      {" "}
                      Fees:
                      <Typography
                        label={`${data.fees}`}
                        className="mt-0    ml-0 text-md"
                      />
                    </span>
                  </div>
                  <span className="flex">
                    {" "}
                    Position:
                    <Typography
                      label={`${data.position}`}
                      className="mt-0    ml-0 text-md"
                    />
                  </span>
                </div>
              </div>
              <Typography
                label={"Education"}
                className="mt-0  text-center   ml-0 text-md"
              />
              <Table
                table_rows={data.qualifications}
                table_head={["year", "university", "degree", "percentage"]}
              />
              <Typography
                label={"Experience"}
                className="mt-0 w-full text-center   ml-0 text-md"
              />
              <Table
                table_head={[
                  "Hospital",
                  "Position",
                  "StartingDate",
                  "EndingDate",
                  "Tenure",
                ]}
                table_rows={data.experience}
              />
              <Typography
                label={"TimeSlots"}
                className="mt-0  text-center   ml-0 text-md"
              />
              <Table
                table_head={["Day", "StartingTime", "EndingTime"]}
                table_rows={data.timeSlots}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
