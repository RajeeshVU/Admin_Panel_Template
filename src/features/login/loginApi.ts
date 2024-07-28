import axiosRequest from '../../api/axios'
import { environments } from '../../config/environments/environments'



 const loginApi= async (data:any)=>{
return await axiosRequest({
    data:data,
    url:`${environments.apiUrl}/auth/login`,
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    }
  })
}

export default loginApi