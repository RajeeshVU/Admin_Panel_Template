import { FC } from "react";
import { Typography, TabStylesType } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface TableProps extends TabStylesType {
  table_head?: any[];
  table_rows?: any[];
  border?: string;

}

const Table: FC<TableProps> = ({ table_head, table_rows }) => {

  return (
    <>
      <table className="w-full min-w-max   border-0 mt-2 table-auto text-left">
        <thead>
          <tr>
            {table_head?.map((head) => (
              <th key={head} className="border-2  bg-teal-500 text-white p-4">
                <Typography
                  variant="small"
                  
                  className="font-normal leading-none "
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_rows?.map((item: any, index) => (
            <tr key={index} >
              {Object.entries(item)?.map(([key, value]) => (
              <td className="p-4 text-left" key={key}>
           {
            key =='link'?
            <Link   className=" bg-teal-500 text-sm w-15 justify-center items-center text-white flex p-1 px-2 rounded-md " to={value? Object.values(value)[0] :''}>{ value? Object.values(value)[1] :''}</Link>:value?.toString()
           }
              </td>
              ))}
             
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
