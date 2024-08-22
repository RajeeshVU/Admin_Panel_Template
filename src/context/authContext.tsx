
import { FC, createContext, useContext, useEffect, useReducer } from "react";
  interface AuthContextType {
    user: string | null;
    token: string | null ;
    role: string | null;
    refreshToken: string | null;
    dispatch:(action:any)=>void;
  }
 
const initialValue:AuthContextType ={
 
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
    role:localStorage.getItem("role"),
    refreshToken:localStorage.getItem("refreshToken"),
  dispatch:(action)=>{},
}

export const authContext=createContext<AuthContextType >(initialValue)
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
    localStorage.setItem("user", state.user);
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
    localStorage.setItem("refreshToken", state.refreshToken);
  }, [state]);
return(
  <authContext.Provider  value={
   {
    user: state.user,
    token: state.token,
    role: state.role,
    refreshToken:state.refreshToken,
  dispatch,
}
  }>
  {children}
  </authContext.Provider>
)
}

export const useAuth=()=>{
  const context=useContext(authContext);
  if(!context){
    throw new Error('useAuth must be used within an AuthProvider')
  }
 return context; 
}
export default AuthContextProvider;

