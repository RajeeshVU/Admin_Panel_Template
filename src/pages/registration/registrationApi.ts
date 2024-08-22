import axios from 'axios';
import axiosRequest from '../../api/axios';
import { environments } from '../../config/environments/environments';

export const registrationApi = async (data: any) => {
  

  try {
    const response = await axiosRequest({
      data: data,
      url: `${environments.apiUrl}/registration/add_registration`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {;
    throw error; 
  }
};


