import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import  {GlobalContext}  from '@/Context/GlobalContext'
import { type Cart } from "@/Context/GlobalContext";
import { Button } from "@/components/ui/button";
const Cart = () => {
  const {cart  , handleRemoveCart} : any = React.useContext(GlobalContext)
  console.log(cart)
  return (
    <div className="flex  justify-center space-x-20 mt-20">
    <div className="flex w-6/12 flex-col justify-center">
      {
        cart.length === 0 ? (
          <p className="text-3xl font-bold">No product in cart</p>
        ) : (
          cart.map((item: Cart , index : number) => (
            <div key={index} className="w-full mb-7">
        <Card className=" shadow-lg rounded-lg p-4">
          <CardHeader className="border-b border-gray-200 pb-4">
            <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-3 pt-4">
            <div className="w-3/12">
              <img
                className=" object-cover rounded-lg"
                src={item.images[0]}
                alt="product"
              />
            </div>
            <div className="w-9/12">
              <p className="text-sm">
                {item.description}
              </p>
              <p className="text-lg font-bold mt-4">Price: $ {item.price}</p>
              <p className="text-lg font-bold">Rating: {item.rating}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=>handleRemoveCart(item)} className="bg-yellow-500 text-white hover:bg-red-700">Remove</Button>
          </CardFooter>
        </Card>
      </div>
          ))
        )
      }
      </div>
      

      <div className="w-4/12">
        <Card className=" shadow-lg rounded-lg p-4">
          <CardHeader className="border-b border-gray-200 pb-4">
            <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col pt-4">
            <p className="text-lg font-bold">Item Price: ${ cart ? (cart.reduce((total : number, item : Cart)=> total + item.price ,0) ).toFixed(2): 0 }</p>
            <p className="text-lg font-bold">Tax: $4.99</p>
            <p className="text-lg font-bold">Total: ${cart.length===0 ?  0:  (cart.reduce((total:number , item : Cart)=> total+ item.price , 4.99)).toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;

