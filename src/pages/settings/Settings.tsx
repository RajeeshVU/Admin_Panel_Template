import { FC } from "react";
import Typography from "../../components/typography/Typography";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import FileInputComponent from "../../components/fileInput/FileInputComponent";
import ButtonComponent from "../../components/button/Button";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import profileImage from "../../assets/cover/bgProfile.jpg";
interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <>
      <div className="p-2">
        <Typography
          label={"Settings"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 p-2 text-lg"
        />
        <div className="relative flex flex-col w-full items-center justify-center mt-4 shadow-lg pb-4">
          <div className="w-full !h-[16rem]">
            <div
              className="bg-gray-600 relative !h-[10rem] items-center flex justify-center rounded-md w-full"
              style={{ backgroundImage: `url(${profileImage})` }}
            >
              <div className=" relative  overflow-hidden rounded-full !h-[10rem] mt-40 !w-[10rem]  ">
                <Typography
                  label={"Edit Image"}
                  className="absolute bg-blue-gray-300 w-full text-center  mt-[70%]"
                />
                <FileInputComponent
                  className="absolute opacity-0    !h-full cursor-pointer"
                  type="file"
                />

                <ImageComponent
                  className=" rounded-full !h-[10rem] !w-[10rem]"
                  loading="lazy"
                  alt="patient_image"
                />
              </div>
            </div>
          </div>
          <span className="flex gap-2">
            {" "}
            <Typography label={"Profile Name"} />
            <ButtonComponent
              className="align-middle flex gap-2 bg-green-600  h-4 px-2 py-3 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <FaRegEdit />
            </ButtonComponent>
          </span>
          <Typography label={"Department"} />
          <span className="flex gap-2">
            <Typography label={"abc@gmail.com"} />{" "}
            <ButtonComponent
              className="align-middle flex gap-2 bg-green-600  h-4 px-2 py-3 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <FaRegEdit />
            </ButtonComponent>
          </span>
          <span className="flex">
            Id:
            <Typography label={"!@#$%^&*"} />
          </span>
          <div className="flex gap-2 flex-col w-[20%] justify-center">
            <ButtonComponent
              label="Change Password"
              className="align-middle  flex gap-2 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-300 text-gray-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            />
            <Link
              to={"/doctors/details/edit"}
              className="align-middle flex gap-2 justify-center items-center select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Logout
              <BiLogOutCircle />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
