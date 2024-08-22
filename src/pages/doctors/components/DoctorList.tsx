import { FC, useMemo, useState } from 'react';
import DoctorsTable from './DoctorsTable';
import Typography from '../../../components/typography/Typography';
import { MRT_ColumnDef } from 'material-react-table';
import { useDoctorList } from './doctorListApi';
import { Link } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa6";

const DoctorList: FC = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const response = useDoctorList(pagination);

  const getPagination = (newPagination: any) => {
    setPagination(newPagination);
  };

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: "Name",
        Cell: ({ row }) => {
          return `${row.original.firstName} ${row.original.lastName}`;
        },
        size: 150,
      },
      {
        accessorKey: 'dept',
        header: "Dept",
        size: 150,
      },
      {
        accessorKey: 'position',
        header: "Position",
        size: 200,
      },
      {
        accessorKey: 'timeSlots',
        header: "Days",
        Cell: ({ row }) => {
          const days = row.original.timeSlots.map((slot: any) => slot.day);
          const uniqueDays = new Set(days);
          return Array.from(uniqueDays).join(', ');
        },
        size: 150,
      },
      {
        accessorKey: 'room',
        header: "Room",
        size: 150,
      },
      {
        accessorKey: '_id',
        header: "Book",
        Cell: ({ row }) => {
          return (
            <Link
              className="bg-sideBar w-[50%] text-sm justify-center items-center text-white flex p-1 px-2 rounded-md"
              to={`/dashboard/appointment?id=${row.original._id}`}
            >
              Book
            </Link>
          );
        },
        size: 150,
      },
      {
        accessorKey: '_id',
        header: "Details",
        Cell: ({ row }) => {
          return (
            <Link
              className="bg-sideBar w-[60%] text-sm justify-center items-center text-white flex p-1 px-2 rounded-md"
              to={`details?id=${row.original._id}`}
            >
              Details
            </Link>
          );
        },
        size: 100,
      },
    ],
    []
  );

  return (
    <div className="p-2 relative">
      <Typography
        label={"Doctors Available"}
        className="mt-0 bg-sideBar text-white text-center ml-0 py-3 text-lg"
      />
      <div className="">
        <Link
          className="bg-sideBar text-sm justify-center items-center text-white flex p-1 px-2 mt-2"
          to={`add_doctor`}
        >
          Add Doctor
          <FaUserPlus className="ml-4" color="white" />
        </Link>
      </div>
      <div className="!w-[100%] relative">
        {response.data ? (
          <DoctorsTable
            data={response.data.data}
            rowCount={response.data.limit}
            columnsData={columns}
            pagination={pagination}
            getPagination={getPagination}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
