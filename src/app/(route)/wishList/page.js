'use client'

import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import Navbar1 from "@/app/components/navbar/Navbar1";
import store from "@/app/store/Store";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";


const Favorites = ()=>{
    const [favproducts,setFavproducts] = useState(null);
    const { userData } = useSelector((state) => state.auth);
    const userId = userData && userData.user ? userData.user.id :'';

    // get User Fav List from the Database
    const getUserFavList = async() =>{
        console.log(userId);
        const response = await fetch(`http://localhost:4000/products/getfavourites/${userId}`)
    
        const favproductlist = await response.json();
        setFavproducts(favproductlist.favorites);
        // console.log("fav--",favproductlist);
      }
    
    // remove fav products from fav list  from the database
    const removeFavProduct = async (product) =>{
        console.log(userId);
        const productId = product.id;
    const response = await fetch('http://localhost:4000/products/deletefavproduct',{
       method: 'DELETE',
       headers: {
        'Content-Type': 'application/json'
    }, 
       body:JSON.stringify({productId, userId})
    })
    if(response.ok){
        console.log('product remove from fav list');
        getUserFavList();
    }
    else{
        console.log('Failed to remove product from the Fav list!!!');
    }

    }
    
      useEffect(()=>{
        getUserFavList();
        removeFavProduct();
      },[])
    // console.log(favproducts)

    return(
      <Provider store={store}>
        <Header />
        <Navbar1 />
        <div className="flex gap-7 my-8 px-16 justify-center items-center">
           {
            favproducts ? (
                favproducts.map((product)=>(
                    <div className="w-[17rem] p-4 flex flex-col justify-center items-center border-[.3rem] border-[#7f8c8d]  ">
                        <img className="w-[60%]" src={product.image} alt="product_image" />
                        <p className="text-xl font-bold text-center">{product.title}</p>
                        <span className="text-base font-bold flex">Price :- {product.price}</span>
                        <button 
                        className="!bg-red-500 text-base font-semibold p-2 rounded mt-4"
                        onClick={()=>removeFavProduct(product)}
                        >
                            Remove from Favorites
                        </button>
                    </div>
                    
                )
                    
                )
            ) : (           
                <div className="m-8  flex justify-center items-center flex-col">
                <h1 className="font-bold text-red-500">OOPS Your WishList Is empty! </h1>
                <span className="text-4xl text-green-500 font-bold">Please Add Some Products You Like.</span>
              </div>
            )
           }
        </div>
        <Footer />
        </Provider>
    )
}
export default Favorites;


