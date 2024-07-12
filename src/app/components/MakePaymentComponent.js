//components->MakePaymentComponent.js
'use client'
import React, { useEffect, useState } from 'react'
import { createDispatchHook, createSelectorHook, useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../store/CartSlice';



const MakePaymentComponent = () => {
  const [cartitem, setCartitem] = useState([]);

  const { userData } = useSelector((state) => state.auth);
 
  const userId = userData && userData.data ? userData.data.id : '';
  

  const totalPrice = (cartitem || []).reduce((total, item) => total + item.price, 0);

  console.log("total-->",totalPrice)
           const dispatch1 = useDispatch();

           const cartitems = useSelector(
            (state) => state.allCart.cart1
          );
           useEffect(() => {
             dispatch1(getCartTotal());
           }, [cartitems]);

           const checkoutList = async () => {
            console.log("the checkouts user id     --", userId)
            const response = await fetch(`http://localhost:4000/products/getCheckoutslist/${userId}`)
            const checkoutProducts = await response.json();
            setCartitem(checkoutProducts.checkouts);
            console.log("cartItems--- >>>>>", checkoutProducts);
          }
        
          useEffect(() => {
            checkoutList();
          }, []);
   
    const makePayment = async () => {
       
        //console.log("here...");
        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay",
        {
             method: "POST",
             headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                taxAmt:totalPrice*100
             })
         }
        )
        .then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Easy Pay",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for your test donation",
          
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert("Razorpay Response: "+response.razorpay_payment_id);
            //alert(response.razorpay_order_id);
            //alert(response.razorpay_signature);
          },
          prefill: {
            name:"Name",
            email:"Email",
            contact:'Contact'

          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);

          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };

          document.body.appendChild(script);
        });
      }
  return (
    <div>
        <button onClick={()=>makePayment() } className="btn btn-primary">Pay now</button>
    </div>
  )
}

export default MakePaymentComponent