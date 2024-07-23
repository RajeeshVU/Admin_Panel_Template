import { FC, ReactElement, useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import ButtonComponent from '../../../components/button/Button';


//example data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state:string;
  details?: ReactElement | string;
  book?:ReactElement | string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
    details:     <ButtonComponent
    operation={close}
    className=" bg-teal-500 text-sm justify-center items-center text-white flex p-1 px-2 rounded-md "
    type="submit"
    label="details"
  >
   
  </ButtonComponent >,
   book:<ButtonComponent
   operation={close}
   className=" bg-teal-500 text-sm justify-center items-center text-white flex p-1 px-2 rounded-md "
   type="submit"
   label="Book"
   
 >
  
 </ButtonComponent >,
  },
];

interface DoctorsTabletProps extends React.HtmlHTMLAttributes<HTMLTableElement> {
  getData?:()=>void;
}

const DoctorsTable: FC<DoctorsTabletProps> = ({...rest}) => {

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Dept',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Position',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'Days',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'Time',
        size: 150,
      },
      {
        accessorKey: 'book',
        header: 'Book',
        size: 150,
      },
      {
        accessorKey: 'details',
        header: 'Details',
        size: 100,
      },
    ],
    [],
  );

  const MaterialTable = useMaterialReactTable({
    columns,
    data, 
  });

  return <MaterialReactTable  {...rest} table={MaterialTable} />;
};

export default DoctorsTable;
