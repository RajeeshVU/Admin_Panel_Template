import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import ButtonComponent from "../../button/Button";
import SelectDropdown from "../../select/Select";
import * as yup from "yup";
import Typography from "../../typography/Typography";
import ImageComponent from "../../imageComponent/ImageComponent";
import FileInputComponent from "../../fileInput/FileInputComponent";
import InputComponent from "../../input/inputComponent";
import { bloodTypeOptions } from "./bloodTypeArray";
import { RelationList } from "./relationArray";
import { LocalBodyTypeList } from "./localBodyType";
import { useLocation, useParams } from "react-router-dom";

interface RegistrationFormProps {
  onSubmit: (data: any) => void;
  formData?: any;
}

const RegistrationForm: FC<RegistrationFormProps> = ({
  onSubmit,
  formData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<any>("");
  const [errors, setErrors] = useState<any>([]);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState<any>({
    photo: null,
    firstName: "test",
    lastName: "test",
    age: null,
    gender: "Male",
    blood: "",
    maritalStatus: "",
    guardian: "",
    relation: "",
    address: {
      house: "",
      localBodyType: "",
      localBody: "",
      post: "",
      district: "",
      state: "",
      country: "",
      pin: "",
    },
    phone1: "",
    phone2: "",
  });
  let url:any=useLocation()
 
  const close = () => {
    setIsOpen(!isOpen);
  };
  const formSchema = yup.object({
    firstName: yup.string().required("firstName required"),
    lastName: yup.string().required("lastName required"),
    age: yup.string().required("age required"),
    gender: yup.string().required("select gender"),
    maritalStatus: yup.string().required("select maritalStatus"),
    blood: yup.string().required("select blood"),
    guardian: yup.string().required("guardian required"),
    relation: yup.string().required("select relation"),
    phone1: yup
      .string()
      .required("phone required")
      .max(14, "Invalid Phone")
      .min(10, "Invalid Phone"),
    address: yup.object({
      house: yup.string().required("house required"),
      localBodyType: yup.string().required("localBodyType required"),
      localBody: yup.string().required("localBody required"),
      post: yup.string().required("post required"),
      district: yup.string().required("district  required"),
      state: yup.string().required("state  required"),
      country: yup.string().required("country  required"),
      pin: yup.string().required("pin required").max(4, "Invalid length"),
    }),
  });

  useEffect(() => {
  

    if (formData && formData?.data) {
      setForm(formData.data);
    } else {
     
      setForm({
        photo: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        blood: "",
        maritalStatus: "",
        guardian: "",
        relation: "",
        address: {
          place: "",
          house: "",
          localBodyType: "",
          localBody: "",
          post: "",
          district: "",
          state: "",
          country: "",
          pin: "",
        },
        phone1: "",
        phone2: "",
      });
    }
  }, [formData]);
  const handleReadData = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;

    const [section, field] = name.split(".");
    if (field) {
      setForm((prevForm: any) => ({
        ...prevForm,
        [section]: {
          ...prevForm[section],
          [field]: value,
        },
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const getFile = (file: any) => {
    form.photo = file;
    setImageSrc(URL.createObjectURL(file));
  };

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setErrors({});
      // await formSchema.validate(form, { abortEarly: false });
      onSubmit(form);
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
      <form
        action=""
        className="w-full flex flex-col   h-full"
        onSubmit={formSubmit}
      >
        <div className="p-2">
          <Typography
            label={"Patient Details"}
            tag={"h6"}
            className="text-left  bg-sideBarBg border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
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
                src={formData ? form.photo : imageSrc}
              />
              <Typography
                label={"Select Image"}
                className="text-center text-[#607d8b] text-sm"
              />
            </div>

            <div className="grid justify-center  w-full grid-cols-3 gap-y-3   gap-x-5  p-2">
              <InputComponent
                label="FirstName"
                placeholder="FirstName"
                value={form.firstName}
                type="text"
                name="firstName"
                onChange={handleReadData}
                error={errors["firstName"]}
              />
              <InputComponent
                label="LastName"
                placeholder="LastName"
                type="text"
                value={form.lastName}
                name="lastName"
                error={errors["lastName"]}
                onChange={handleReadData}
              />

              <div className="flex gap-2 h-ful ">
                <SelectDropdown
                  error={errors["gender"]}
                  value={"male"}
                  className="w-1/4"
                  onChange={(selectedOption: any) =>
                    setForm({
                      ...form,

                      gender: selectedOption,
                    })
                  }
                  placeholder="Gender"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                  ]}
                />

                <InputComponent
                  label="Age"
                  type="number"
                  error={errors["age"]}
                  placeholder="Age"
                  value={form.age}
                  name="age"
                  onChange={handleReadData}
                />
              </div>
              <div className="flex gap-2">
                <SelectDropdown
                  error={errors["blood"]}
                  onChange={(selectedOption: any) =>
                    setForm({
                      ...form,

                      blood: selectedOption,
                    })
                  }
                  value={form.blood}
                  placeholder="Blood"
                  options={bloodTypeOptions}
                />
                <SelectDropdown
                  error={errors["maritalStatus"]}
                  onChange={(selectedOption: any) =>
                    setForm({
                      ...form,

                      maritalStatus: selectedOption,
                    })
                  }
                  value={form.maritalStatus}
                  placeholder="Marital Status"
                  options={[
                    { label: "Single", value: "single" },
                    { label: "Married", value: "married" },
                  ]}
                />
              </div>

              <InputComponent
                type="text"
                name="guardian"
                error={errors["guardian"]}
                label="Guardian"
                placeholder="Guardian"
                value={form.guardian}
                onChange={handleReadData}
              />
              <SelectDropdown
                error={errors["relation"]}
                onChange={(selectedOption: any) =>
                  setForm({
                    ...form,

                    relation: selectedOption,
                  })
                }
                placeholder="Relation"
                name="relation"
                value={form.relation}
                options={RelationList}
              />
            </div>
          </div>
          <Typography
            label={"Address"}
            tag={"h1"}
            className="text-left  bg-sideBarBg border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
          />
          <div className="grid justify-center  w-full grid-cols-3 gap-y-5 px-5   gap-x-5  p-2">
            <InputComponent
              label="House"
              error={errors["address.house"]}
              type="text"
              name="address.house"
              value={form.address.house}
              placeholder="House"
              onChange={handleReadData}
            />
            <SelectDropdown
              error={errors["address.localBodyType"]}
              onChange={(selectedOption: any) =>
                setForm({
                  ...form,
                  address: {
                    ...form.address,
                    localBodyType: selectedOption,
                  },
                })
              }
              name="address.localBodyType"
              value={form.address.localBodyType}
              placeholder="LocalBodyType"
              options={LocalBodyTypeList}
            />
            <InputComponent
              label="LocalBody"
              error={errors["address.localBody"]}
              type="text"
              name="address.localBody"
              placeholder="LocalBody"
              value={form.address.localBody}
              onChange={handleReadData}
            />

            <InputComponent
              label="Post"
              type="text"
              error={errors["address.post"]}
              name="address.post"
              placeholder="Post"
              value={form.address.post}
              onChange={handleReadData}
            />

            <InputComponent
              label="District"
              type="text"
              error={errors["address.district"]}
              name="address.district"
              placeholder="District"
              value={form.address.district}
              onChange={handleReadData}
            />

            <InputComponent
              label="State"
              type="text"
              error={errors["address.state"]}
              name="address.state"
              placeholder="State"
              value={form.address.state}
              onChange={handleReadData}
            />

            <InputComponent
              label="Country"
              error={errors["address.country"]}
              type="text"
              name="address.country"
              placeholder="Country"
              value={form.address.country}
              onChange={handleReadData}
            />
            <InputComponent
              label="Pin"
              type="text"
              error={errors["address.pin"]}
              name="address.pin"
              placeholder="Pin"
              value={form.address.pin}
              onChange={handleReadData}
            />
          </div>
          <Typography
            label={"Contact Info"}
            tag={"h1"}
            className="text-left  bg-sideBarBg border-b-2 border-bg-gray-200 text-white mt-3 pl-4  text-md"
          />
          <div className="grid justify-center  w-full grid-cols-4 gap-y-2 px-5 gap-4 p-2">
            <InputComponent
              label="Phone 1"
              type="text"
              error={errors["phone1"]}
              name="phone1"
              placeholder="Phone 1"
              value={form.phone1}
              onChange={handleReadData}
            />
            <InputComponent
              label="Phone 2"
              type="text"
              name="phone2"
              placeholder="Phone 2"
              value={form.phone2 !== null ? form.phone2 : ""}
              onChange={handleReadData}
            />
          </div>
        </div>

        <div className="w-full flex  flex-col    p-2   justify-between items-center">
          <ButtonComponent
            className=" bg-sideBarBg text-sm justify-center items-center text-white flex p-2 rounded-md "
            type="submit"
            label={`${url.search  !=="" && formData  ? 'Update' : 'Proceed'}`}
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
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
