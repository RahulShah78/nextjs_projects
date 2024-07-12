'use client'
import Header from "./components/header/Header";
import Navbar1 from "./components/navbar/Navbar1";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import Fruits from "./components/fruits/Fruits";
import Slider from "./components/slider/Slider";
import Product from "./components/Featureproduct/Product";
import Dropdown from "./components/dropdown/Dropdown";
import ThreeSlider from "./components/ThreeSlider/ThreeSlider";
import { Provider } from "react-redux";
import "./globals.css";
import store from "./store/Store";
import App from "./SearchResults/page";




export default function Home() {
  
  return (
   
    <Provider store={store}>

 

       <Header />
      <Navbar1 />
      <App />
      <Slider />
      <Product />
      <Fruits />
      <ThreeSlider />
      <Blogs />
      <Footer/>


 </Provider>

  );
}
