import {createContext,useState} from "react";
export const AppContext=createContext();

function AppContextProvider({children}){
  const[token,settoken]=useState(null);
  const[isAuth,setisAuth]=useState(false);
    return<AppContext.Provider value={{token,settoken,setisAuth,isAuth}}>
      {children}
    </AppContext.Provider>
}
export default AppContextProvider