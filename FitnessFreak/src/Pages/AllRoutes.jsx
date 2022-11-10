import {Routes,Route} from "react-router-dom";

import SignUp from "./Signup";
import Login from "./Login"
import Homepage from "./Homepage"

export default  function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
        </Routes>
    )
}