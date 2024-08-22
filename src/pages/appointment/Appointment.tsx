import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import AppointmentForm from "../../components/forms/appointmentForm/AppointmentForm";
import Typography from "../../components/typography/Typography";
import ButtonComponent from "../../components/button/Button";
import {appointmentApi, UpdateAppointmentApi} from "./appointmentApi";
import AlertBox from "../../components/alert/Alert";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import TokenForm from "../../components/forms/tokenform/TokenForm";
import { useReactToPrint } from "react-to-print";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatDate } from "../../utils/dateFormat";
import { environments } from "../../config/environments/environments";
interface AppointmentProps {}

const Appointment: FC<AppointmentProps> = ({}) => {
  const [query, setQuery] = useState<string >("")
  const [response, setResponse] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [print, setPrint] = useState(false);
  const [clear, setClear] = useState(false);
  const [type, setType] = useState("");
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<string | undefined>("");
  const navigate = useNavigate();
  const [form,setForm]=useState<any>({})
  const url = useLocation();
  const queryParams = new URLSearchParams(url.search);
  const id = queryParams.get("id");
  const handleSubmit = async (data: any) => {

    try {
      setType("loading")
       setOpen(true)
       if(data?.token)
       {
        await UpdateAppointmentApi({id:id, data: data });  
        setType("success"); 
        setMessage("Updated Successfully");
        setTimeout(() => {
          setOpen(false);
          setPrint(true);
        }, 2000);
        // setType("loading");
        // setOpen(true);
       }
       else{
        await appointmentApi({ data: data });
        setType("success");
        setMessage("Application Successful");
        setTimeout(() => {
          setOpen(false);
          setPrint(true);
        }, 2000);
        // setType("loading");
        // setOpen(true);
       }
      
    } catch (error: any) {
      setOpen(false);
      if (error) {
        toast.error(error.response?.data?.message?.toString());
      }
    }
  };
useEffect(()=>{
  setResponse("")
  setForm("")
  setQuery("")

},[clear])
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print This Document",
    onAfterPrint: () => {
      setPrint(false);
      navigate("/dashboard/appointment");
      setResponse("")
      setForm("")
      setQuery("")
    },
  });
  const getAppointment=async(id:string)=>{
    setResponse("")
    try {
      const response = await axios.get(
        `${environments.apiUrl}/appointments/find/${id}`
      );
      setForm(response.data);
      console.log("filter",response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  }
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${environments.apiUrl}/appointments/search?search=${query}`
      );
      setResponse(response.data) ; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  };
  const { isPending, error } = useQuery({
    queryKey: ["queryData", query],
    queryFn: fetchData,
    enabled: active,
    retry: 5,
  });
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (query && query.length >= 9) {
      setActive(true);
    } else {
      setResponse("")
      setActive(false);
    }
  };
  const clearData=()=>{
    setForm({})
    setClear(!clear)
  }

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
          <div className="flex gap-3">
            <ButtonComponent
              className="flex justify-center bg-red-600 shadow-lg !text-white rounded-sm w-20 items-center p-2"
              onClick={() => navigate(0)}
            >
              Close
            </ButtonComponent>
            <ButtonComponent
              className="flex justify-center items-center shadow-md bg-white rounded-sm p-2 w-20"
              onClick={handlePrint}
            >
              Print
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div className=" relative p-2 h-full ">
        <Typography
          label={"Appointments"}
          className="mt-0 bg-sideBar text-white text-center ml-0 py-3 text-lg"
        />
        <div className="text-left relative flex justify-center   items-center py-1  bg-sideBar   mt-3   text-md">
          <div className="flex relative w-[30%]  justify-center bg-blue-gray-700">
            <div
              className={` w-full border-b-2 ${response?.data && query ? "absolute" : "hidden"}  z-10  bg-white p-2 overflow-y-scroll max-h-28 top-8`}
            >
              {response?.data !== null ? (
                response?.data?.map((item: any, index: number) => (
                  <Link
                 onClick={()=>getAppointment(item?._id)}
                    to={`?id=${item?._id}`}
                    className="w-full border-b-2 p-2  border-b-teal-500 flex justify-between "
                    key={index}
                  >
                    <span>
                      <p className="text-md text-gray-700">
                        {item.patientDetails.firstName}{" "}
                        {item.patientDetails.lastName}
                      </p>{" "}
                      <p className="text-xs text-gray-700">
                        {item.patientDetails.place}
                      </p>{" "}
                    </span>
                    <span>
                      {" "}
                      <p className="text-md text-gray-700 text-right">
                        Token:{item.token}
                      </p>
                      <p className="text-xs text-gray-700">
                        Date:{formatDate(item.doctorDetails.date)}
                      </p>
                    </span>
                  </Link>
                ))
              ) : (
                <span>
                  {" "}
                  <p className="text-sm text-gray-700 text-right">
                    No data Found!
                  </p>
                </span>
              )}
            </div>

            <input
              type="number"
              value={query}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
              placeholder="Enter Phone "
              className="!h-6 md:w-[30%] !w-full pl-3 outline-teal-500 placeholder:text-sm text-teal-500 "
            />
          </div>
          <ButtonComponent
            className="flex  items-center text-gray-800  text-sm justify-center w-[30%] md:w-[10%]  !h-6 bg-blue-gray-100"
            type="button"
            operation={()=>handleSearch}
            label="Search"
          />
  
             <ButtonComponent
             onClick={clearData}
            className="flex  items-center text-gray-800  text-sm justify-center w-[30%] md:w-[10%]  !h-6 bg-blue-gray-100"
            type="button"
            label="Clear"
          />
        </div>
       
        <AppointmentForm formData={form.data}  onSubmit={handleSubmit} />
        <div className="hidden">
          <TokenForm ref={componentRef} />
        </div>
      </div>
    </>
  );
};

export default Appointment;
