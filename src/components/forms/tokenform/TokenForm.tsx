import { FC,forwardRef } from "react";
import Typography from "../../typography/Typography";

interface TokenFormProps {
  data?:[];
}

const TokenForm =forwardRef<HTMLDivElement,TokenFormProps>(({data},ref) => {

  return (
    <>
      <div className="p-3   w-[1240 px] h-[1123px] " ref={ref}>
        <div className="bg-tokenBorder flex align-middle justify-center h-[10%]   text-white" >
          <span className="flex items-center text-3xl">
            <Typography tag={"h1"} label={"Hospital Name"} /> 
          </span>
        </div>
        <div className="text-lg flex justify-between   text-tokenBorder  p-2 py-4 border-t-0 border-2 border-tokenBorder">
          <div className="flex flex-col justify-center align-middle">
            <span className="flex">
              Dr:
              <Typography className="text-lg" tag={"h1"} label={"Rahul"} />
            </span>
            <span className="flex">
              Dept:
              <Typography className="text-lg" tag={"h1"} label={"Ornithology"} />
            </span>
            <span className="flex">
              Room:
              <Typography className="text-lg" tag={"h1"} label={"10"} />
            </span>
            <span className="flex">
              Block:
              <Typography className="text-lg" tag={"h1"} label={"B1"} />
            </span>
          </div>
          <div className="flex flex-col justify-between p-2 text-white gap-2 bg-tokenBorder ">
            <span className="flex flex-col gap-3 items-center">
              Token No.
              <Typography className="text-[3rem]" tag={"h1"} label={"1"} />
            </span>
            <span className="   items-center ">
              <Typography
                className="text-lg"
                tag={"h1"}
                label={"July-10-2024"}
              />
            </span>
          </div>
        </div>
        <div className="text-lg flex flex-col justify-between text-tokenBorder  p-2 border-t-0 border-2 border-tokenBorder">
          <div className="flex gap-3 justify-center">
            <span className="flex"> 
              Name:
              <Typography className="text-lg" tag={"h1"} label={"Rahul"} />
            </span>
            <span className="flex">
              Age:
              <Typography className="text-lg" tag={"h1"} label={"10"} />
            </span>
            <span className="flex">
              Place:
              <Typography className="text-lg" tag={"h1"} label={"Malappuram"} />
            </span>
            
          </div>
        
        </div>
          <div className="flex gap-2 text-tokenBorder  justify-center text-lg border-t-0 border-2 border-tokenBorder">
           <div className="w-[10%]  border-tokenBorder text-center border-2 border-r-2 border-y-0 border-x-0">Sl No.</div>
           <div className="w-[80%] text-center">Prescription</div>
           <div className="w-[10%] border-tokenBorder text-center border-2  border-l-2 border-y-0 border-x-0">Date</div>
          </div>
          <div className="flex gap-2 h-[69%]  text-tokenBorder aspect-a4  justify-center text-sm border-t-0 border-2 border-tokenBorder">
           <div className="w-[10%]  border-tokenBorder text-center border-2  border-r-2 border-y-0 border-x-0"></div>
           <div className="w-[80%] text-center"></div>
           <div className="w-[10%] border-tokenBorder text-center border-2  border-l-2 border-y-0 border-x-0"></div>
          </div>
        </div>
    </>
  );
});

export default TokenForm;
