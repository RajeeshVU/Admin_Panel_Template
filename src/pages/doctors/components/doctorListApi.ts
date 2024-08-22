import { useQuery } from "@tanstack/react-query";
import axiosRequest from "../../../api/axios";
import { environments } from "../../../config/environments/environments";
interface Pagination{
  pageIndex:number;
  pageSize:number
}
const fetchDoctorList = async (pagination:Pagination) => {
  const { pageIndex, pageSize } = pagination;

  try {
    const response = await axiosRequest({
      url: `${environments.apiUrl}/doctor/doctor_list/pagination?size=${pageSize}&skip=${(pageIndex)*pageSize}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useDoctorList = (pagination:any) => {
  return useQuery({
    queryKey: ["doctorList", pagination],
    queryFn: () => fetchDoctorList(pagination),
    enabled: true,
    retry: 1,
    
  });
};
