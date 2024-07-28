
import { FC, createContext, useEffect, useReducer } from "react";
interface User {
    userName: string | null;
    token?: string | null;
    role?: string | null;
    refreshToken?: string | null;
  }
  interface InitialValue{
    user: User;
    dispatch:(action:any)=>void;
  }
 
const initialValue:InitialValue={
  user: {
    userName: '',
    token: '',
    role: '',
    refreshToken:'',
  },
  dispatch:(action)=>{},
}

export const authContext=createContext(initialValue)
 const authReducer=(state:any,action:any)=>{
  switch (action.type) {
    case "LOG_IN":
      return {
        user: action.payload.username,
        role: action.payload.role,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    case "LOG_OUT":
      return {
        user: state=null,
        token: state=null,
        role: state=null,
      };
      case "UPDATE":
        return {
          user: action.payload.username,
          role: action.payload.role,
          token: action.payload.token,
          refreshToken: action.payload.refreshToken,
        };
    default:
      return state;
  }
};
interface AuthContextProviderProps
{
  children:React.ReactNode;
}

const AuthContextProvider:FC<AuthContextProviderProps>=({children})=>{

  const [state,dispatch]=useReducer(authReducer,initialValue)
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
    localStorage.setItem("refreshToken", state.refreshToken);
  }, [state]);
return(
  <authContext.Provider  value={
   { user: {
    userName: state.username,
    token: state.token,
    role: state.role,
    refreshToken:state.refreshToken,
  },
  dispatch,
}
  }>
  {children}
  </authContext.Provider>
)
}

export default AuthContextProvider;

