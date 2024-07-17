import { FC, useState, useRef, forwardRef } from "react";
import Typography from "../../typography/Typography";
import SelectDropdown from "../../select/Select";
import InputComponent from "../../input/Input";
import ButtonComponent from "../../button/Button";
import Table from "../../table/Table";
import { TABLE_HEAD, TABLE_ROWS } from "../../table/tabledata";
import ModalComponent from "../../modal/Modal";
import { FiPrinter } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import TokenForm from "../tokenform/TokenForm";
import { useReactToPrint } from "react-to-print";
interface AppointmentFormProps {}

const AppointmentForm: FC<AppointmentFormProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement | null> (null);

  const close = () => {
    setIsOpen(!isOpen);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print This Document",
  });
  return (
    <>
      <form action="" className="w-full flex flex-col   h-full">
      
        <div className="p-2">
          <Typography
            label={"Appointments"}
            className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
          />
          <Typography
            label={"Patient Details"}
            tag={"h6"}
            className="text-left border-b-2 border-bg-gray-200 text-headingSmall mt-3 ml-4 mr-4 text-md"
          />
          <div  className="grid grid-cols-1 mt-1 gap-4 lg:grid-cols-3 sm:grid-cols-1 px-3  p-2">
            <InputComponent
              type="text"
              color="teal"
              name="firstName"
              containerProps={{className:"!min-w-0 h-8 flex w-full"}}
              labelProps={{className:" w-full h-8 !min-h-0 "}}
              className=" w-full  "
          
              error={false}
              label="First Name"
            />
            <InputComponent
              type="text"
              color="teal"
              name="lastName"
              containerProps={{className:"!min-w-0 h-8 flex w-full"}}
              labelProps={{className:" w-full h-8 !min-h-0 "}}
              className=" w-full  "
              label="Last Name "
            />
            <InputComponent
              type="number"
              color="teal"
              name="age"
              containerProps={{className:"!min-w-0 h-8 flex w-full"}}
              labelProps={{className:" w-full h-8 !min-h-0 "}}
              className=" w-full  "
              label="Age"
            />
            <InputComponent
              type="text"
              color="teal"
              name="place"
              containerProps={{className:"!min-w-0 h-8 flex w-full"}}
              labelProps={{className:" w-full h-8 !min-h-0 "}}
              className=" w-full  "
              label="Place "
            />
            <InputComponent
              type="number"
              color="teal"
              name="phone"
              containerProps={{className:"!min-w-0 h-8 flex w-full"}}
              labelProps={{className:" w-full h-8 !min-h-0 "}}
              className=" w-full  "
              label="Phone"
            />
          </div>

          <Typography
            label={"Doctor Details"}
            tag={"h1"}
            className="text-left border-b-2 border-bg-gray-200 text-headingSmall ml-4 mr-4 mt-2 text-md"
          />

          <div className="grid grid-cols-1 mt-1 gap-4 lg:grid-cols-3 sm:grid-cols-1 p-2">
            <SelectDropdown
               containerProps={{className:"!min-w-0 h-8 flex w-full"}}
               labelProps={{className:" w-full h-8 !min-h-0 "}}
               className=" w-full  "
              name="department"
              label="Select Department"
              color="teal"
              options={["Brazil", "Brazil", "Brazil"]}
            />
            <SelectDropdown
                containerProps={{className:"!min-w-0 h-8 flex w-full"}}
                labelProps={{className:" w-full h-8 !min-h-0 "}}
                className=" w-full  "
              name="doctor"
              label="Select Doctor"
              color="teal"
              options={["Brazil", "Brazil", "Brazil"]}
            />
            <InputComponent
              type="date"
              color="teal"
              name="date"
              containerProps={{className:"!min-w-0 h-8 flex w-full"}}
              labelProps={{className:" w-full h-8 !min-h-0 "}}
              className=" w-full  "
              label="Date"
            />
          </div>
          <Typography
            label={"Appointment Details"}
            tag={"h1"}
            className="text-left border-b-2 border-bg-gray-200 text-headingSmall ml-4 mr-4 mt-2 text-md"
          />
          <Table table_head={TABLE_HEAD} table_rows={TABLE_ROWS} />
        </div>

        <div className="w-full flex  flex-col    p-2   justify-between items-end">
          <ButtonComponent
            operation={close}
            className=" bg-teal-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label="Proceed"
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </ButtonComponent>
          <ModalComponent open={isOpen} >
            <div className="absolute flex right-0 bg-black top-0 ">
              <button
                className="bg-red-500 p-2"
                onClick={() => setIsOpen(false)}
              >
                <RiArrowGoBackFill color="white" className=" h-full " />
              </button>
              <button className=" bg-green-500 p-2" onClick={handlePrint}>
                <FiPrinter color="white" className=" h-full " />
              </button>
            </div>
            <TokenForm ref={componentRef}/>
          </ModalComponent>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
