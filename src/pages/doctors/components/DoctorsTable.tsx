import { FC } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

interface DoctorsTabletProps
  extends React.HtmlHTMLAttributes<HTMLTableElement> {
  data: any[];
  rowCount: number;
  pagination: { pageIndex: number; pageSize: number };
  getPagination: (data: any) => void;
  columnsData: any[];
}

const DoctorsTable: FC<DoctorsTabletProps> = ({
  getPagination,
  rowCount,
  data,
  columnsData,
  pagination,
  ...rest
}) => {
  const MaterialTable = useMaterialReactTable({
    columns: columnsData,
    data,
    rowCount,
    manualPagination: true,
    pageCount: Math.ceil(rowCount / pagination?.pageSize),
    onPaginationChange: getPagination, 
    state: { pagination },
  });
  return <MaterialReactTable {...rest} table={MaterialTable} />;
};

export default DoctorsTable;