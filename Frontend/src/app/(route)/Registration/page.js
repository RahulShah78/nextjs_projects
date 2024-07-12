'use client'
import Signup from "@/app/Signup/page";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import Navbar1 from "@/app/components/navbar/Navbar1";
import { Provider } from "react-redux";
import store from "@/app/store/Store";

 
 export default function page() {
   return (
    <Provider store={store}>
     <>
       <Header/>
       <Navbar1/>
        < Signup />
       <Footer />
     </>
     </Provider> 
   )
 }
 