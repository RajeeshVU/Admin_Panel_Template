import { FC, useEffect, useState } from "react";
import Typography from "../../components/typography/Typography";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { lastDayOfMonth, getDate } from "date-fns";
interface AdmissionsProps {}

const Admissions: FC<AdmissionsProps> = ({}) => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState<any>(2024);
  const [monthMap,setMonthMap]=useState<any>([])
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getMonthName = (monthValue: number) => {
    if (monthValue < 0 || monthValue > 11) {
      return "Invalid Month"; // Or handle differently as needed
    }

    return monthNames[monthValue];
  };
  function getMonthLength(date: any) {
    const lastDay = lastDayOfMonth(date);
    return getDate(lastDay);
  }
  const date = new Date(`${year}, ${month + 1}, 14`);
  const day = new Date(`${year}, ${month + 1}, 1`);
  const now = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const dayOfWeek = date.getDay();

  const dayName = dayNames[dayOfWeek];
  const monthLength = getMonthLength(date);
  const prevMonthLength = getMonthLength(`${year}, ${month+1}, 14`);

  const firstIndex=day.getDay();


const lastIndex=new Date(`${year}, ${month + 1}, ${monthLength}`).getDay()

  const monthArray:any=[]

  useEffect(() => {
    const adjustedMonth = ((month % 12) + 12) % 12;
    setMonth(adjustedMonth);
    appendArray()
  }, [month]);

  const appendArray=()=>{
    
    for (let i = 0; i < firstIndex; i++) {
      monthArray.push(prevMonthLength-i)
      
  }
  monthArray.reverse()
  for (let i = 1; i <= monthLength; i++) {
    monthArray.push(i)
    
}
for (let i = 1; i <=7-(lastIndex+1); i++) {
  monthArray.push(i)
  
}
setMonthMap(monthArray)
  }



  return (
    <>
      <Typography tag={"h1"} label={"Admissions"} />
     
      <div className="flex">
        <button onClick={() => setMonth(month + 1)}>
          <IoIosArrowBack />
        </button>
        <h2>{getMonthName(month)}</h2>
        <button onClick={() => setMonth(month - 1)}>
          <IoIosArrowForward />
        </button>
        <button onClick={() => setYear(year + 1)}>
          <IoIosArrowBack />
        </button>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={() => setYear(year - 1)}>
          <IoIosArrowForward />
        </button>
      </div>
  
          <div className="grid grid-cols-7">
        {dayNames.map((item:any,index:number)=>(
          <div className="grid-item" key={index}>
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    
      <div className="grid grid-cols-7 border-black gap-1 p-1 bg-black  transition-all delay-100">
        {monthMap.map((item:any,index:number)=>(
          <div className="grid-item p-5 text-center  bg-white  " key={index}>
          <h1 className={`  ${index % 7 === 0 ? "text-red-500" : ""} ${(index >= firstIndex && index < monthMap.length -(7-lastIndex-1) ) ? "text-black" : "text-gray-600"}`}>{item}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admissions;
