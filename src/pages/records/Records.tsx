import { FC } from "react";
import Typography from "../../components/typography/Typography";
import ButtonComponent from "../../components/button/Button";
import RegistrationForm from "../../components/forms/registrationForm/RegistrationFrom";
interface RecordsProps {}

const Records: FC<RecordsProps> = ({}) => {
  return (
    <>
      <div className="p-2">
        <Typography
          label={"Records"}
          className="mt-0 bg-teal-500  text-white text-center ml-0 py-3 text-lg"
        />
     
        <div className="text-left relative flex  justify-center items-center py-1  bg-teal-500   mt-3   text-md">
   <input placeholder="Enter Id/Phone" className="!h-6 w-[20%] pl-3"/>
          
          <ButtonComponent
            className="flex  items-center text-gray-800  text-sm justify-center w-[10%]  !h-6 bg-blue-gray-100"
            type="button"
            label="Search"
          />
<ButtonComponent   type="button"
            label="Edit" className="bg-white text-sm p-2 text-gray-800 justify-center items-center flex !h-6  ml-4 ">
</ButtonComponent>

        </div>
        <RegistrationForm />
      </div>
    </>
  );
};

export default Records;
