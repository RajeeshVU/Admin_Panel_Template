import { FC, useRef, useState } from "react";
import Typography from "../../../components/typography/Typography";
import DoctorEditForm from "../../../components/forms/doctorForm/DoctorEditForm";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoctorApi } from "./addDoctorApi";
import AlertBox from "../../../components/alert/Alert";
import { useDoctorById } from "./doctorById";
import { updateDoctorApi } from "./updateDoctorApi";

interface EditDoctorProps {}

const EditDoctor: FC<EditDoctorProps> = ({}) => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [print, setPrint] = useState(false);
  const [clear, setClear] = useState(false);
  const [type, setType] = useState("");
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<string | undefined>("");
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const url = useLocation();
  const queryParams = new URLSearchParams(url.search);
  const id = queryParams.get("id");
  const { data } = useDoctorById(id);
  
  const handleSubmit = async (data: any) => {
    try {
      setType("loading");
      setOpen(true);
      if (id != null) {
        await updateDoctorApi({ data: data, id: id });
        setType("success");
        setMessage("Data Updated Successfully");
      } else {
        await addDoctorApi(data);
        setType("success");
        setMessage("Data Added Successfully");
      }

      setTimeout(() => {
        setOpen(false);
        setPrint(true);
      }, 2000);
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
      <div className="p-2">
        <Typography
          label={`${id ? "Update Doctor" : "Add Doctor"}`}
          className="mt-0 bg-sideBar text-white text-center ml-0 py-3 text-lg"
        />

        <DoctorEditForm
          type={`${id ? "Update " : "Add"}`}
          formData={data?.data}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default EditDoctor;
