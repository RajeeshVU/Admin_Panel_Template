import { FC, useState } from "react";
import Input from "../../input/Input";
import Typography from "../../typography/Typography";
import DateSelector from "../../datePicker/DatePicker";
import { BsCalendarDate } from "react-icons/bs";
interface AppointmentFormProps {}

const AppointmentForm: FC<AppointmentFormProps> = ({}) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const holidays = [new Date(2024, 6, 4), new Date(2024, 6, 10),new Date(2024, 6, 18)];
  const [selectedDate, setSelectedDate] = useState(null);
  const isHighlighted = (date:any) => holidays.some((holiday) => holiday.getTime() === date.getTime()); // Check for matching dates
  return (
    <>
      <form action="" className="w-full ">
        <Typography label={"Personal Details"} tag={"h1"} className="text-center text-lg"/>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 gap-y-0 p-5 pt-0">
        <Input
          label={"first Name"}
          className="w-full text-balance h-8 "
          name={"firstName"}
        />
        <Input label={"last Name"} className="w-full h-8" name={"firstName"} />

        <Input label={"age"} type="number" className="w-full h-8" name={"firstName"} />

        <Input label={"place"} className="w-full h-8" name={"firstName"} />
        <Input label={"Phone"} type="number"  className="w-full h-8" name={"firstName"} />
        </div>
        <Typography label={"Appointment Details"} className="text-center text-lg"/>
        
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 gap-y-0 p-5 pt-0">
        
        <Input
          label={"Department"}
          
          className="w-full h-8 "
          name={"firstName"}
        />
        <Input label={"Doctor"} className="w-full h-8" name={"firstName"} />


     <DateSelector className="w-full h-8" type="date" label="Date" name={""} />
        </div>
       
      </form>
    </>
  );
};

export default AppointmentForm;
