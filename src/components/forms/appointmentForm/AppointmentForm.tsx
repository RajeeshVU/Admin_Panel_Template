import { FC, useState, FormEvent, ChangeEvent, useEffect } from "react";
import Typography from "../../typography/Typography";
import ButtonComponent from "../../button/Button";
import Table from "../../table/Table";
import * as yup from "yup";
import InputComponent from "../../input/inputComponent";
import SelectDropdown from "../../select/Select";
import { GenderList } from "./genderType";
import dateFormat, { masks } from "dateformat";
import { Root } from "./AppointFomType";
import { removeField, removeFieldObject } from "../../../utils/removeIdFromObject";
interface AppointmentFormProps {
  onSubmit: (data: any) => void;
  formData?: any;
}

const AppointmentForm: FC<AppointmentFormProps> = ({ onSubmit, formData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<any>([]);
  let today = `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;
  const [form, setForm] = useState<Root>({
    paymentStatus: "",
    patientDetails: {
      firstName: "",
      lastName: null,
      age: null,
      gender: "",
      place: "",
      phone: null,
    },
    doctorDetails: {
      dept: "",
      name: "",
      date: "",
      fees: "",
    },
    token: "",
  });

  const formSchema = yup.object({
    patientDetails: yup.object({
      firstName: yup.string().required("firstName required"),
      lastName: yup.string().required("lastName required"),
      age: yup.string().required("age required"),
      gender: yup.string().required("select gender"),
      place: yup.string().required("place required"),
      phone: yup
        .string()
        .required("phone required")
        .min(10, "Invalid phone")
        .max(15, "Invalid phone s"),
    }),
    doctorDetails: yup.object({
      dept: yup.string().required("select dept"),
      name: yup.string().required("select doctor"),
      date: yup.string().required("date is required"),
    }),
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  useEffect(() => {
    if ( formData) {
      setForm(formData);
    } else {
      setForm({
        paymentStatus: "",
        patientDetails: {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          place: "",
          phone: "",
        },
        doctorDetails: {
          dept: "",
          name: "",
          date: "",
          fees: "",
        },
        token: "",
      });
    }
  }, [formData]);
  const handleReadData = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;

    const [section, field] = name.split(".");

    setForm((prevForm: any) => ({
      ...prevForm,
      [section]: {
        ...prevForm[section],
        [field]: value,
      },
    }));
  };
 
  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setErrors({});
      console.log(errors);
      await formSchema.validate(form, { abortEarly: false });
      
      onSubmit(removeFieldObject(form,'_id'));
    } catch (error: any) {
      const newError: any = {};
      error.inner.forEach((err: any) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  return (
    <>
      <form action="" className="w-full flex flex-col   " onSubmit={formSubmit}>
        <div className="md:p-2 p-0">
          <Typography
            label={"Patient Details"}
            tag={"h6"}
            className="text-left  bg-sideBar border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
          />
          <div className="grid grid-cols-1 mt-1 gap-4 lg:grid-cols-3 sm:grid-cols-1 px-0 md:px-3  p-2">
            <InputComponent
              error={errors["patientDetails.firstName"]}
              label="First Name"
              type="text"
              value={form.patientDetails.firstName}
              placeholder="First Name"
              name="patientDetails.firstName"
              onChange={handleReadData}
            />
            <InputComponent
              type="text"
              error={errors["patientDetails.lastName"]}
              label="Last Name"
              value={form.patientDetails.lastName}
              placeholder="Last Name"
              name="patientDetails.lastName"
              onChange={handleReadData}
            />
            <InputComponent
              label="Age"
              type="number"
              error={errors["patientDetails.age"]}
              value={form.patientDetails.age}
              placeholder="Age"
              name="patientDetails.age"
              onChange={handleReadData}
            />
            <SelectDropdown
              error={errors["patientDetails.gender"]}
              value={form.patientDetails.gender}
              onChange={(selectedOption: any) =>
                setForm({
                  ...form,
                  patientDetails: {
                    ...form.patientDetails,
                    gender: selectedOption,
                  },
                })
              }
              placeholder={"Gender"}
              options={GenderList}
            />
            <InputComponent
              label="Place"
              error={errors["patientDetails.place"]}
              value={form.patientDetails.place}
              placeholder="Place"
              name="patientDetails.place"
              onChange={handleReadData}
            />
            <InputComponent
              label="Phone"
              type="number"
              error={errors["patientDetails.phone"]}
              value={form.patientDetails.phone}
              placeholder="Phone"
              name="patientDetails.phone"
              onChange={handleReadData}
            />
          </div>
          <Typography
            label={"Doctor Details"}
            tag={"h1"}
            className="text-left  bg-sideBar border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
          />
          <div className="grid grid-cols-1 mt-1 gap-4 lg:grid-cols-3 sm:grid-cols-1 px-0 md:px-3  p-2">
            <SelectDropdown
              error={errors["doctorDetails.dept"]}
              value={form.doctorDetails.dept}
              onChange={(selectedOption: any) =>
                setForm({
                  ...form,
                  doctorDetails: {
                    ...form.doctorDetails,
                    dept: selectedOption,
                  },
                })
              }
              placeholder={"Select Dept"}
              options={options}
            />
            <SelectDropdown
              error={errors["doctorDetails.name"]}
              value={form.doctorDetails.name}
              onChange={(selectedOption: any) =>
                setForm({
                  ...form,
                  doctorDetails: {
                    ...form.doctorDetails,
                    name: selectedOption,
                  },
                })
              }
              placeholder={"Select Name"}
              options={options}
            />
            <InputComponent
              label="Date"
              type="date"
              error={errors["doctorDetails.date"]}
              value={
                form?.doctorDetails?.date &&
                dateFormat(form?.doctorDetails?.date, "yyyy-mm-dd")
              }
              name="doctorDetails.date"
              onChange={handleReadData}
              min={today}
            />
            <SelectDropdown
              value={form.paymentStatus}
              onChange={(selectedOption: any) =>
                setForm({
                  ...form,
                  paymentStatus: selectedOption,
                })
              }
              placeholder={"Payment Status"}
              options={options}
            />
          </div>
          <Typography
            label={"Appointment Details"}
            tag={"h1"}
            className="text-left border-b-2 border-bg-gray-200 text-headingSmall ml-4 mr-4 mt-2 text-md"
          />
          <div className="overflow-x-scroll ">
            <Table
              table_head={[
                "Dept",
                "Name",
                "Date",
                "Fee",
                "Status",
                "Token No.",
              ]}
              table_rows={[
                {
                  ...form.doctorDetails,
                  date: formData
                    ? dateFormat(
                        formData?.doctorDetails?.date,
                        "dddd, mmmm dS, yyyy"
                      )
                    : form?.doctorDetails?.date == ""
                      ? ""
                      : dateFormat(
                          form?.doctorDetails?.date,
                          "dddd, mmmm dS, yyyy"
                        ),
                  status: form?.paymentStatus,
                  token: form?.token,
                },
              ]}
            />
          </div>
        </div>

        <div className="w-full flex  flex-col    p-2   justify-between items-center">
          <ButtonComponent
            // onClick={()=>handlePrint}
            // operation={useReactToPrint({
            //   content: () => componentRef.current,
            //   documentTitle: "Print This Document",
            // })}

            className=" bg-sideBar text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label={`${formData ? "Update" : "Proceed"}`}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </ButtonComponent>
          {/* <ModalComponent open={isOpen}>
            <div className="absolute flex right-0 bg-black top-0 ">
              <button
                className="bg-red-500 p-2"
                onClick={() => setIsOpen(false)}
              >
                <RiArrowGoBackFill color="white" className=" h-full " />
              </button>
           
                <FiPrinter color="white" className=" h-full " />
              </button>
            </div>
          </ModalComponent> */}
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
