import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../../../components/typography/Typography";
import Badge from "../../../components/badge/Badge";
import AdmissionCard from "../../../components/admissionCard/AdmissionCard";
import Table from "../../../components/table/Table";
interface AdmissionsProps {}

const Admissions: FC<AdmissionsProps> = ({}) => {
  return (
    <>
      <div className="p-2">
        <Typography
          label={"Admissions"}
          className="mt-0 bg-teal-500  text-white text-center ml-0 py-3 text-lg"
        />
        <div className="grid grid-cols-4 gap-2 gap-y-4  mt-5 mb-6">
          <AdmissionCard
            badgeLabel={5}
            link={'records'}
            bg="bg-red-500 text-white"
            label="Casualty"
          />
          <AdmissionCard
            badgeLabel={5}
            link={'records'}
            bg="bg-pink-300 text-white"
            label="Labour Ward"
          />
          <AdmissionCard
            badgeLabel={5}
            link={'records'}
            bg="bg-deep-orange-500 text-white"
            label="ICU"
          />
          <AdmissionCard
            badgeLabel={5}
            link={'records'}
            bg="bg-blue-700 text-white"
            label="Burns Ward"
          />
          <AdmissionCard
            badgeLabel={5}
            link={'records'}
            bg="bg-yellow-600 text-white"
            label="General Medicine"
          />
          <AdmissionCard
            badgeLabel={5}
            link={'records'}
            bg="bg-green-700 text-white"
            label="Pediatrics Ward"
          />
        </div>
        <Table
        border="red"
          table_head={["Sl No.", "Ward", "Total Beds", "Vacant",""]}
          table_rows={[
            { sl: "1", ward: "Casualty", total: "150", vacant: "10",link:{to:"/records",label:"go"} },
          ]}
        />
      </div>
    </>
  );
};

export default Admissions;
