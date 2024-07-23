import { FC, useRef, useState } from "react";
import ButtonComponent from "../../button/Button";
import InputComponent from "../../input/Input";
import SelectDropdown from "../../select/Select";
import { useReactToPrint } from "react-to-print";
import Typography from "../../typography/Typography";
import ImageComponent from "../../imageComponent/ImageComponent";
import FileInputComponent from "../../fileInput/FileInputComponent";
import { MdOutlineDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
interface DoctorEditFormProps {}

const DoctorEditForm: FC<DoctorEditFormProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<any>("");
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    bio: "",
    specialization: "",
    gender: "",
    ticket_prize: "",
    qualifications: [
      { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experience: [
      { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: "",
  });
  const addItem = (key: any, item: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const addField = (e: React.ChangeEvent, key: any, field: any) => {
    e.preventDefault();
    addItem(key, field);
  };
  // const handleReusableInputChangeFormat = (key:any, index:any, e:React.ChangeEvent) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData:any) => ({
  //     ...prevFormData,
  //     [key]: prevFormData[key].map((item:any, itemIndex:any) =>
  //       index === itemIndex ? { ...item, [name]: value } : item
  //     ),
  //   }));
  // };
  // const handleField = (e:React.ChangeEvent, index:any, field:any) => {
  //   handleReusableInputChangeFormat(field:any, index:any, e:React.ChangeEvent);
  // };
  // const deleteField = (e:React.ChangeEvent, index:any, field:any) => {
  //   e.preventDefault();
  //   setFormData((prevFormData:any) => ({
  //     ...prevFormData,
  //     [field]:
  //       prevFormData[field] &&
  //       prevFormData[field].filter((_, i) => i !== index),
  //   }));
  // };
  const close = () => {
    setIsOpen(!isOpen);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print This Document",
  });
  const getFile = (file: any) => {
    setImageSrc(URL.createObjectURL(file));
  };
  return (
    <>
      <form action="" className="w-full flex flex-col   h-full">
        <div className="p-2">
          <Typography
            label={"Profile Details"}
            tag={"h6"}
            className="text-left  bg-teal-500 border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
          />
          <div className="flex w-full gap-4 p-2 px-3">
            <div className="bg-red-200 !h-[7rem] basis-1/7 border-2 border-headingSmall  w-[6rem]">
              <FileInputComponent
                className="absolute h-[7rem] opacity-0    w-[6rem] cursor-pointer"
                type="file"
                getData={getFile}
              />

              <ImageComponent
                className="w-full h-full object-cover "
                loading="lazy"
                alt="patient_image"
                src={imageSrc}
              />
              <Typography
                label={"Select Image"}
                className="text-center text-[#607d8b] text-sm"
              />
            </div>

            <div className="grid justify-center items-center w-full grid-cols-3 gap-y-3   gap-x-5  p-2">
              <InputComponent
                type="text"
                color="teal"
                name="firstName"
                variant="standard"
                className="w-full "
                error={false}
                label="Name"
                containerProps={{ className: "!min-w-0 h-8 flex w-full" }}
                labelProps={{ className: " w-full h-8 !min-h-0 " }}
              />

              <SelectDropdown
                options={["Male", "Female", "Other"]}
                containerProps={{ className: "!min-w-0 h-8 flex w-full" }}
                labelProps={{ className: " w-full h-8 !min-h-0 " }}
                name="gender"
                variant="standard"
                className="h-full w-[100%] "
                label="Department"
                color="teal"
              />

              <InputComponent
                type="number"
                color="teal"
                name="guardian"
                containerProps={{ className: "!min-w-0 h-8 flex w-full" }}
                labelProps={{ className: " w-full h-8 !min-h-0 " }}
                className="h-4 py-4 w-full "
                variant="standard"
                label="Room No."
              />
              <InputComponent
                type="number"
                color="teal"
                name="guardian"
                containerProps={{ className: "!min-w-0 h-8 flex w-full" }}
                labelProps={{ className: " w-full h-8 !min-h-0 " }}
                className="h-4 py-4 w-full "
                variant="standard"
                label="Fees"
              />
            </div>
          </div>
          <div className="grid gap-2 grid-cols-2">
            <div className="">
              <Typography
                label={"Education"}
                tag={"h6"}
                className="text-left  bg-teal-500 border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
              />
                <div className="flex gap-2 mt-3">
                <InputComponent type="number"  variant="standard" containerProps={{className:"!min-w-0 !w-[40%]  !h-8"}} label="Year"/>
            <InputComponent type="text"  variant="standard" containerProps={{className:"!min-w-0  !h-8"}} label="University"/>
            <InputComponent type="text"  variant="standard" containerProps={{className:"!min-w-0  !h-8"}} label="Degree"/>
              </div>

             <div className="flex justify-end mt-3 gap-2">
             <ButtonComponent
            operation={close}
            className=" bg-teal-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label=""
          >
          <MdAdd />
        </ButtonComponent>
        <ButtonComponent
            operation={close}
            className=" bg-red-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label=""
          >
         <MdOutlineDelete />
        </ButtonComponent>
             </div>
            </div>
            <div className="">
              <Typography
                label={"Experience"}
                tag={"h6"}
                className="text-left  bg-teal-500 border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
              />
                <div className="flex gap-2 mt-3">
                <InputComponent type="text"  variant="standard" containerProps={{className:"!min-w-0  !h-8"}} label="Hospital"/>
            <InputComponent type="text"  variant="standard" containerProps={{className:"!min-w-0  !h-8"}} label="Post"/>
            <InputComponent type="text"  variant="standard" containerProps={{className:"!min-w-0 !w-[40%]  !h-8"}} label="Tenure-Mnt"/>
              </div>

             <div className="flex justify-end mt-3 gap-2">
             <ButtonComponent
            operation={close}
            className=" bg-teal-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label=""
          >
          <MdAdd />
        </ButtonComponent>
        <ButtonComponent
            operation={close}
            className=" bg-red-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label=""
          >
         <MdOutlineDelete />
        </ButtonComponent>
             </div>
            </div>
            <div className="">
              <Typography
                label={"TimeSlots"}
                tag={"h6"}
                className="text-left  bg-teal-500 border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
              />
              <div className="grid grid-cols-3 gap-2 mt-3">
              <SelectDropdown options={["Male","Female","Other"]} 
           containerProps={{className:"!min-w-0 h-8 flex w-full"}}
           labelProps={{className:" w-full h-8 !min-h-0 "}}
           variant="standard"
            name='gender'
            className="h-full w-[100%] " label='Days' color='teal'/>
            <InputComponent type="time"  variant="standard" containerProps={{className:"!min-w-0  !h-8"}} label="Starting Time"/>
            <InputComponent type="time"  variant="standard" containerProps={{className:"!min-w-0  !h-8"}} label="Starting Time"/>
              </div>

             <div className="flex justify-end mt-3 gap-2">
             <ButtonComponent
            operation={close}
            className=" bg-teal-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label=""
          >
          <MdAdd />
        </ButtonComponent>
        <ButtonComponent
            operation={close}
            className=" bg-red-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label=""
          >
         <MdOutlineDelete />
        </ButtonComponent>
             </div>
            </div>
          </div>
        </div>
        <div className="w-full flex  flex-col    p-2   justify-between items-center">
          <ButtonComponent
            operation={close}
            className=" bg-teal-500 gap-2 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label="Update"
          >
          <GrUpdate />
          </ButtonComponent>
        </div>
      </form>
    </>
  );
};

export default DoctorEditForm;
