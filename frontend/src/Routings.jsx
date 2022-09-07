import React from "react";

import App from "./App.js";
import Deleteitem from "./Deleteitem";
import Edititem from "./Edititem.jsx";
import { Routes, Route } from "react-router-dom";



const Routings = ()=>{
return(
    <Routes>
        <Route exact path = "/" element={<App></App>}></Route>
        <Route exact path = "/deleteitem/:itemID" element={<Deleteitem></Deleteitem>}></Route>
        <Route exact path = "/edititem/:itemID" element={<Edititem></Edititem>}></Route>

    </Routes>
);
 
}
export default Routings;