
import  { FC, useRef, useState } from 'react';
import { FiPrinter } from 'react-icons/fi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import ButtonComponent from '../../button/Button';
import InputComponent from '../../input/Input';
import ModalComponent from '../../modal/Modal';
import SelectDropdown from '../../select/Select';
import { useReactToPrint } from 'react-to-print';
import Typography from '../../typography/Typography';
import ImageComponent from '../../imageComponent/ImageComponent';
import FileInputComponent from '../../fileInput/FileInputComponent';

interface RegistrationFormProps {
  
}

const RegistrationForm: FC<RegistrationFormProps> = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState<any>('');
    const componentRef = useRef<HTMLDivElement | null> (null);
   
    const close = () => {
        setIsOpen(!isOpen);
      };
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Print This Document",
      });
      const getFile=(file:any)=>{
        setImageSrc(URL.createObjectURL(file))
      }
  return (
    <>
       <form action="" className="w-full flex flex-col  justify-between h-full">
      
      <div className="p-2">
        <Typography
          label={"Registration"}
          className="mt-0 bg-teal-500 text-white text-center ml-0 py-3 text-lg"
        />
        <Typography
          label={"Patient Details"}
          tag={"h6"}
          className="text-left border-b-2 border-bg-gray-200 text-headingSmall mt-3 ml-4 mr-4 text-md"
        />
        <div  className="flex w-full gap-4 p-2 px-3">
       <div className="bg-red-200 !h-[7rem] basis-1/7 border-2 border-headingSmall  w-[6rem]">
       <FileInputComponent className='absolute h-[7rem] opacity-0    w-[6rem] cursor-pointer'  type='file' getData={getFile}/>
        
        
        <ImageComponent  className='w-full h-full object-cover ' loading='lazy' alt='patient_image'    src={imageSrc}/>
        <Typography label={'Select Image'} className='text-center text-[#607d8b] text-sm'/>
       </div>
         
      <div className="grid justify-center items-center w-full grid-cols-3 gap-y-3   gap-x-5  p-2">
      <InputComponent
            type="text"
            color="teal"
            name="firstName"
            className="w-full "
            error={false}
            label="First Name"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
          />
          <InputComponent
            type="text"
            color="teal"
            name="lastName"
            className="h-4 "
            label="Last Name "
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
          />
        
         <div className="flex gap-2">
         <SelectDropdown options={["Male","Female","Other"]} 
           containerProps={{className:"!min-w-0 h-8 flex w-full"}}
           labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='gender'
            className="h-full w-[100%] " label='Gender' color='teal'/>

             <InputComponent
            type="number"
            color="teal"
            name="age"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            className="h-4 w-[100%] "
            label="Age "
          />
         </div>
         <div className="flex gap-2">
         <SelectDropdown options={["A+","A-","B+"]} 
           containerProps={{className:"!min-w-0 h-8 flex w-full"}}
           labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='blood'

            className="h-full w-[100%] " label='Blood' color='teal'/>
            <SelectDropdown options={["A+","A-","B+"]} 
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='maritalStatus'
            className="h-full w-[100%] " label='Marital Status' color='teal'/>
         </div>
        
           
         <InputComponent
            type="t"
            color="teal"
            name="guardian"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            className="h-4 w-full "
            label="Guardian Name"
          />
              <SelectDropdown options={["Father","Mother","Brother","Sister","Husband","Wife","Son","Relative"]} 
             containerProps={{className:"!min-w-0 h-8 flex w-full"}}
             labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='relation'
            className="h-full w-[100%] " label='Relation' color='teal'/>
           
        </div>
      
      </div>
          
       
        
       

        <Typography
          label={"Address"}
          tag={"h1"}
          className="text-left mt-4 border-b-2 border-bg-gray-200 text-headingSmall ml-4 mr-4  text-md"
        />

<div className="grid justify-center items-center w-full grid-cols-3   gap-y-5 px-3  gap-x-5 p-2">
      <InputComponent
            type="text"
            color="teal"
            
            name="house"
            className="w-full "
            error={false}
            label="House"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
          />
          <InputComponent
            type="text"
            color="teal"
            name="localBodyType"
            className="h-4 "
            label="LocalBody Type"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
          />
        
        
      
         <SelectDropdown options={["A+","A-","B+"]} 
             containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='localBody'
            className="h-full w-[100%] " label='Local Body' color='teal'/>

            <SelectDropdown options={["A+","A-","B+"]} 
             containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='post'
            className="h-full w-[100%] " label='Post' color='teal'/>

<SelectDropdown options={["A+","A-","B+"]} 
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='district'
            className="h-full w-[100%] " label='District' color='teal'/>
        
        <SelectDropdown options={["A+","A-","B+"]} 
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            name='state'
            className="h-full w-[100%] " label='State' color='teal'/>
           
         <InputComponent
            type="text"
            color="teal"
            name="country"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            className="h-4 w-full "
            label="Country"
          />
             <InputComponent
            type="number"
            color="teal"
            name="country"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            className="h-4 w-full "
            label="Pin"
          />
            
           
        </div>
        <Typography
          label={"Contact Info"}
          tag={"h1"}
          className="text-left mt-2 border-b-2 border-bg-gray-200 text-headingSmall ml-4 mr-4  text-md"
        />
        <div className="grid justify-center items-center w-full grid-cols-4 gap-y-2 px-3 gap-4 p-2">
    
           <InputComponent
            type="number"
            color="teal"
            name="phone1"
            containerProps={{className:"!min-w-0 h-8 flex w-full"}}
            labelProps={{className:" w-full h-8 !min-h-0 "}}
            className=" w-full  "
            label="Phone 1"
            
          />
           <InputComponent
            type="number"
            color="teal"
            name="phone2"
          
            containerProps={{className:"!min-w-0 h-8 !outline-0 flex w-full "}}
            labelProps={{className:" !w-[99%] h-8  left-0 !border-0 "}}
            className=" w-full  "
            label="Phone 2"
          />
        </div>
      </div>
     
      
      <div className="w-full flex  flex-col    p-2   justify-between items-end">
        <ButtonComponent
          operation={close}
          className="align-middle mt-5  flex-1 select-none font-sans font-bold text-center 
          uppercase transition-all disabled:opacity-50 disabled:shadow-none
          disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   
          shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 
          focus:opacity-[0.85] text-white bg-teal-600 focus:shadow-none 
          active:opacity-[0.85] active:shadow-none flex items-center gap-3"
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
       
      </div>
    </form>

    </>
  );
};

export default RegistrationForm;