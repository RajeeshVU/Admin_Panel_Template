import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import ButtonComponent from "../../button/Button";
import { useReactToPrint } from "react-to-print";
import Typography from "../../typography/Typography";
import ImageComponent from "../../imageComponent/ImageComponent";
import FileInputComponent from "../../fileInput/FileInputComponent";
import { MdOutlineDelete } from "react-icons/md";
import * as yup from "yup";
import { MdAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import InputComponent from "../../input/inputComponent";
import SelectDropdown from "../../select/Select";
import { GenderList } from "../appointmentForm/genderType";
import { daysList } from "./daysList";
import { deptList } from "./deptList";
import { removeFieldObject } from "../../../utils/removeIdFromObject";


interface DoctorEditFormProps {
  onSubmit: (data: any) => void;
  formData?: any;
  type: string;
}

const DoctorEditForm: FC<DoctorEditFormProps> = ({
  onSubmit,
  formData,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<any>("");
  const [errors, setErrors] = useState<any>([]);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState<any>({
    firstName: "",
    lastName: "",
    phone: "",
    room: "",
    dept: "",
    position: "",
    specialization: "",
    gender: "",
    fees: "",
    qualifications: [{ year: "", degree: "", university: "", percentage: "" }],
    experience: [
      {
        startingDate: "",
        endingDate: "",
        position: "",
        hospital: "",
        tenure: "",
      },
    ],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: imageSrc,
  });

  useEffect(() => {
    if (formData) {
      setForm(formData);
      setImageSrc(formData.photo);
    } else {
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        room: "",
        dept: "",
        position: "",
        specialization: "",
        gender: "",
        fees: "",
        qualifications: [
          { year: "", degree: "", university: "", percentage: "" },
        ],
        experience: [
          {
            startingDate: "",
            endingDate: "",
            position: "",
            hospital: "",
            tenure: "",
          },
        ],
        timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
        about: "",
        photo: "",
      });
    }
  }, [formData]);

  const addItem = (key: any, item: any) => {
 
    setForm((prevForm: any) => ({
      ...prevForm,
      [key]: [
        ...prevForm[key],
        Object.keys(item[0]).reduce((acc, key) => ({ ...acc, [key]: "" }), {}),
      ],
    }));
  };
  const removeField = (index: number, key: string) => {
   
    if (form[key].length > 1) {
      setForm((prevForm: any) => ({
        ...prevForm,
        [key]: prevForm[key].filter((_: any, i: number) => i !== index),
      }));
    }
  };

  const addField = (key: any, field: any) => {

    addItem(key, field);
  };
  const handleReusableInputChangeFormat = (
    key: any,
    index: any,
    e: React.ChangeEvent<any>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm: any) => ({
      ...prevForm,
      [key]: prevForm[key].map((item: any, itemIndex: any) =>
        index === itemIndex ? { ...item, [name]: value } : item
      ),
    }));
  };

  const close = () => {
    setIsOpen(!isOpen);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print This Document",
  });
  const getFile = (file: any) => {
    setImageSrc(URL.createObjectURL(file));
    setForm({ ...form, photo: file });
  };
  const formSchema = yup.object({
    firstName: yup.string().required("firstName required"),
    lastName: yup.string().required("lastName required"),
    room: yup.string().required("room required"),
    gender: yup.string().required("select gender"),
    position: yup.string().required("position required"),
    // specialization: yup.string().required("specialization required"),
    fees: yup.string().required("fees required"),
    dept: yup.string().required("dept required"),
    phone: yup
      .string()
      .required("phone required")
      .min(10, "Invalid phone")
      .max(15, "Invalid phone s"),
    qualifications: yup.array().of(
      yup.object().shape({
        year: yup.string().required("Year required").length(4, "invalid Year"),
        degree: yup.string().required("degree required"),
        university: yup.string().required("university required"),
        percentage: yup.string().required("required"),
      })
    ),
    experience: yup.array().of(
      yup.object().shape({
        startingDate: yup.string().required("startingDate required"),
        endingDate: yup.string().required("endingDate required"),
        position: yup.string().required("position required"),
        hospital: yup.string().required("hospital required"),
        tenure: yup.string().required("tenure required"),
      })
    ),
    timeSlots: yup.array().of(
      yup.object().shape({
        day: yup.string().required("day required"),
        startingTime: yup.string().required("startingTime required"),
        endingTime: yup.string().required("endingTime required"),
      })
    ),
  });
  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setErrors({});
      console.log(errors);
      await formSchema.validate(form, { abortEarly: false });
      onSubmit(removeFieldObject(form, "_id"));
    } catch (error: any) {
      const newError: any = {};
      error.inner.forEach((err: any) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  const handleReadData = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;

    const [section, field] = name.split(".");

    if (field == undefined) {
      setForm({ ...form, [name]: value });
    } else {
      setForm((prevForm: any) => ({
        ...prevForm,
        [section]: {
          ...prevForm[section],
          [field]: value,
        },
      }));
    }
  };

  return (
    <>
      <form
        action=""
        className="w-full flex flex-col   h-full"
        onSubmit={formSubmit}
      >
        <div className="p-2">
          <Typography
            label={"Profile Details"}
            tag={"h6"}
            className="text-left  bg-sideBar border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
          />
          <div className="flex w-full gap-4 p-2 px-3 items-center">
            <div className="bg-red-200 !h-[7rem] basis-1/7 border-2 border-headingSmall  w-[6rem]">
              <FileInputComponent
                className="absolute overflow-hidden h-[7rem] opacity-0    w-[6rem] cursor-pointer"
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

            <div className="grid justify-center  w-full grid-cols-3 gap-y-3   gap-x-5  p-2">
              <InputComponent
                type="text"
                placeholder="First Name"
                error={errors["firstName"]}
                value={form.firstName}
                name="firstName"
                label="First Name"
                onChange={handleReadData}
              />
              <InputComponent
                type="text"
                placeholder="Last Name"
                error={errors["lastName"]}
                value={form.lastName}
                name="lastName"
                label="Last Name"
                onChange={handleReadData}
              />

              <SelectDropdown
                error={errors["gender"]}
                onChange={(selectedOption: any) =>
                  setForm({
                    ...form,
                    gender: selectedOption,
                  })
                }
                value={form.gender}
                options={GenderList}
                name="gender"
                placeholder="Gender"
              />
              <SelectDropdown
                error={errors["dept"]}
                onChange={(selectedOption: any) =>
                  setForm({
                    ...form,

                    dept: selectedOption,
                  })
                }
                value={form.dept}
                options={deptList}
                name="dept"
                placeholder="Dept"
              />
              <InputComponent
                error={errors["room"]}
                type="number"
                placeholder="Room No"
                value={form.room}
                name="room"
                label="Room No."
                onChange={handleReadData}
              />
              <InputComponent
                error={errors["fees"]}
                type="number"
                name="fees"
                placeholder="Fees"
                onChange={handleReadData}
                value={form.fees}
                label="Fees"
              />
              <InputComponent
                type="text"
                error={errors["position"]}
                name="position"
                placeholder="Position"
                onChange={handleReadData}
                value={form.position}
                label="Position"
              />
              <InputComponent
                error={errors["phone"]}
                type="number"
                name="phone"
                placeholder="Phone"
                onChange={handleReadData}
                value={form.phone}
                label="Phone"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <Typography
                label={"Education"}
                tag={"h6"}
                className="text-left  bg-sideBar border-b-2 border-bg-gray-200 text-white mt-0 pl-4  text-md"
              />
              {form.qualifications.map((item: any, index: number) => (
                <div className="flex flex-col  gap-2   mt-3" key={index}>
                  <div className="flex gap-2 ">
                    <div className="text-teal-500 flex ">{`${index + 1})`}</div>
                    <InputComponent
                      error={errors[`qualifications[${index}].year`]}
                      type="number"
                      placeholder="Year"
                      containerProps="w-[10%]"
                      value={form.qualifications[index].year}
                      name="year"
                      label="Year"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat(
                          "qualifications",
                          index,
                          e
                        )
                      }
                    />
                    <InputComponent
                      error={errors[`qualifications[${index}].university`]}
                      type="text"
                      placeholder="University"
                      containerProps="!w-[50%]"
                      value={form.qualifications[index].university}
                      name="university"
                      label="University"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat(
                          "qualifications",
                          index,
                          e
                        )
                      }
                    />
                    <InputComponent
                      type="text"
                      placeholder="Degree"
                      error={errors[`qualifications[${index}].degree`]}
                      containerProps="!w-[50%]"
                      value={form.qualifications[index].degree}
                      name="degree"
                      label="Degree"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat(
                          "qualifications",
                          index,
                          e
                        )
                      }
                    />
                    <InputComponent
                      type="number"
                      placeholder="Percentage"
                      error={errors[`qualifications[${index}].percentage`]}
                      containerProps="!w-[10%]"
                      value={form.qualifications[index].percentage}
                      name="percentage"
                      label="Percentage"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat(
                          "qualifications",
                          index,
                          e
                        )
                      }
                    />
                    <div
                      className={`${
                        form.qualifications.length == 1 ? "hidden" : "block"
                      } flex justify-end`}
                    >
                      <ButtonComponent
                      
                        onClick={()=>removeField(index, "qualifications")}
                        className=" bg-red-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
                        type="button"
                        label=""
                      >
                        <MdOutlineDelete />
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-3 gap-2">
                <ButtonComponent
                  onClick={() =>
                    addField("qualifications", form.qualifications)
                  }
                  className=" bg-sideBar  w-20 text-sm justify-center items-center text-white flex p-2 rounded-md "
                  type="button"
                  label="Add"
                >
                  <MdAdd />
                </ButtonComponent>
              </div>
            </div>
            <div className="w-full mt-3">
              <Typography
                label={"Experience"}
                tag={"h6"}
                className="text-left  bg-sideBar border-b-2 border-bg-gray-200 text-white mt-0 pl-4  text-md"
              />

              {form.experience.map((item: any, index: number) => (
                <div className="flex flex-col  gap-2   mt-3" key={index}>
                  <div className="flex gap-2 ">
                    <div className="text-teal-500 align-middle h-full ">{`${
                      index + 1
                    })`}</div>
                    <InputComponent
                      type="text"
                      error={errors[`experience[${index}].hospital`]}
                      value={form.experience[index].hospital}
                      containerProps="w-[40%]"
                      placeholder="Hospital"
                      name="hospital"
                      label="Hospital"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("experience", index, e)
                      }
                    />
                    <InputComponent
                      type="text"
                      containerProps="w-[40%]"
                      error={errors[`experience[${index}].position`]}
                      placeholder="Position"
                      value={form.experience[index].position}
                      label="Position"
                      name="position"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("experience", index, e)
                      }
                    />
                    <InputComponent
                      type="date"
                      containerProps="w-[20%]"
                      error={errors[`experience[${index}].startingDate`]}
                      placeholder="Start Date"
                      value={form.experience[index].startingDate}
                      label="From"
                      name="startingDate"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("experience", index, e)
                      }
                    />
                    <InputComponent
                      type="date"
                      containerProps="!w-[20%]"
                      error={errors[`experience[${index}].endingDate`]}
                      placeholder="EndingDate"
                      value={form.experience[index].endingDate}
                      label="Till"
                      name="endingDate"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("experience", index, e)
                      }
                    />
                    <InputComponent
                      type="number"
                      containerProps="!w-[10%]"
                      error={errors[`experience[${index}].tenure`]}
                      placeholder="Tenure"
                      value={form.experience[index].tenure}
                      label="Tenure-Mnt"
                      name="tenure"
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("experience", index, e)
                      }
                    />
                    <div
                      className={`${
                        form.experience.length == 1 ? "hidden" : "block"
                      } flex justify-end`}
                    >
                      <ButtonComponent
                        operation={() => removeField(index, "experience")}
                        className=" bg-red-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
                        type="button"
                        label=""
                      >
                        <MdOutlineDelete />
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
              ))}
              {/* </div> */}

              <div className="flex justify-end mt-3 gap-2">
                <ButtonComponent
                  operation={() => addField("experience", form.experience)}
                  className=" bg-sideBar w-20 text-sm justify-center items-center text-white flex p-2 rounded-md "
                 type="button"
                  label="Add"
                >
                  <MdAdd />
                </ButtonComponent>
              </div>
            </div>
            <div className="w-full mt-3">
              <Typography
                label={"TimeSlots"}
                tag={"h6"}
                className="text-left  bg-sideBar border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
              />

              {form.timeSlots.map((item: any, index: number) => (
                <div className="flex flex-col gap-2 mt-3" key={index}>
                  <div className="flex gap-2 ">
                    <div className="text-teal-500 align-middle h-full ">{`${
                      index + 1
                    })`}</div>
                    <SelectDropdown
                      placeholder="Days"
                      error={errors[`timeSlots[${index}].day`]}
                      onChange={(selectedOption) => {
                        setForm((prevForm: any) => ({
                          ...prevForm,
                          timeSlots: prevForm.timeSlots.map(
                            (slot: any, index: number) =>
                              index === index
                                ? { ...slot, day: selectedOption }
                                : slot
                          ),
                        }));
                      }}
                      value={form.timeSlots[index].day}
                      options={daysList}
                      className="h-full"
                    />
                    <InputComponent
                      containerProps="w-full"
                      type="time"
                      label="Starting Time"
                      error={errors[`timeSlots[${index}].startingTime`]}
                      name="startingTime"
                      value={form.timeSlots[index].startingTime}
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("timeSlots", index, e)
                      }
                    />
                    <InputComponent
                      type="time"
                      name="endingTime"
                      value={form.timeSlots[index].endingTime}
                      error={errors[`timeSlots[${index}].endingTime`]}
                      onChange={(e: ChangeEvent) =>
                        handleReusableInputChangeFormat("timeSlots", index, e)
                      }
                      containerProps="w-full"
                      label="Ending Time"
                    />
                    <div
                      className={`${
                        form.timeSlots.length == 1 ? "hidden" : "block"
                      } flex justify-end`}
                    >
                      <ButtonComponent
                        operation={() => removeField(index, "timeSlots")}
                        className=" bg-red-500 text-sm justify-center items-center text-white flex p-2 rounded-md "
                        type="button"
                        label=""
                      >
                        <MdOutlineDelete />
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end mt-3 gap-2">
                <ButtonComponent
                  operation={() => addField("timeSlots", form.timeSlots)}
                  className=" bg-sideBar w-20 text-sm justify-center items-center text-white flex p-2 rounded-md "
                  type="button"
                  label="Add"
                >
                  <MdAdd />
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex  flex-col    p-2   justify-between items-center">
          <ButtonComponent
            operation={close}
            className=" bg-sideBar gap-2 text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label={`${type == "Add" ? "Proceed" : "Update"}`}
          >
            <GrUpdate />
          </ButtonComponent>
        </div>
      </form>
    </>
  );
};

export default DoctorEditForm;
