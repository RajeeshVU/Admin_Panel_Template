import axios from 'axios';
import axiosRequest from '../../api/axios';
import { environments } from '../../config/environments/environments';



export const UpdateRegistrationApi = async (data: any) => {
    try {
      const response = await axiosRequest({
        data: data,
        url: `${environments.apiUrl}/registration/update_registration/${data._id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {;
      throw error; 
    }
  };

