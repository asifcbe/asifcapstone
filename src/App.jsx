import React, { useEffect } from "react";
import Home from "./components/routes/home.component";
import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation.component";
import Authentication from "./components/routes/authentication/authentication.jsx";
import SignUpForm from "./components/signup/signupform";
import Shop from "./components/routes/shop/shopcomponent.jsx";
import Checkout from "./components/routes/checkout/Checkout.jsx";



function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path="authentication" element={<Authentication />}/>
    <Route path="checkout" element={<Checkout />}/>
    

    </Route>
  </Routes>
  );
}

export default App;
