import React from "react";
import Dashboard from "./componemts/Dashboard";
import { Container, dividerClasses } from "@mui/material";
import AddResidents from "./componemts/AddResident/AddResidents";
import ParcelReceived from "./componemts/ParcelReceived/ParcelReceived";
import ParcelDelivered from "./componemts/ParcelDelivered/ParcelDelivered";
import ParcelStatics from "./componemts/ParcelStatic/ParcelStatics"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";




function App (){

  return(
<Router>
<Dashboard />
<Routes>
  <Route path="/Add-Residents" element = {<AddResidents />} />
  <Route path="/Parcel-Delivered" element = {<ParcelDelivered />} />
  <Route path="/Parcel-Received" element = {<ParcelReceived />} />
  <Route path="/Parcel-Statics" element = {<ParcelStatics />} />



</Routes>
</Router>
  
  )  
}

export default App;


