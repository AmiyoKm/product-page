import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FaReact } from "react-icons/fa";
import { GlobalContext } from "@/Context/GlobalContext";
import StarRating from "./StarRating";

const DisplayCard = () => {
  const {
    loading,
    
    data,

    handleAddToCart,
    filter,
  } : any  = React.useContext(GlobalContext);

  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen animate-spin">
        <FaReact size={200} color="#22d3ee" />
      </div>
    );

  }
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10  ">
        {filter?.length > 0
          ? filter?.map((product: any, index: number) => (
              <div
                key={index}
                className="w-[400px]  rounded-3xl ease-in duration-300  hover:scale-105 hover:shadow-2xl space-y-7 cursor-pointer"
              >
                <Card className="flex flex-col justify-between h-full">
                  <CardHeader>
                    <img
                      className="w-full h-[200px] object-cover"
                      src={product.images[0]}
                      alt=""
                    />
                    <CardTitle className="text-md">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="truncate h-5 text-xs">
                    {product.description}
                  </CardContent>
                  <p className="flex items-center m-5">
                    <StarRating rating={Math.round(product.rating)} />
                  </p>
                  <CardFooter>
                    <p className="text-lg"> ${product.price}</p>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="text-xs ml-5 hover:bg-yellow-300 hover:text-black"
                      size="sm"
                    >
                      Add to cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))
          : data.map((product: any, index: number) => (
              <div
                key={index}
                className="w-[400px]  rounded-3xl ease-in duration-300  hover:scale-105 hover:shadow-2xl space-y-7 cursor-pointer"
              >
                <Card className="flex flex-col justify-between h-full">
                  <CardHeader>
                    <img
                      className="w-full h-[200px] object-cover"
                      src={product.images[0]}
                      alt=""
                    />
                    <CardTitle className="text-md">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="truncate h-5 text-xs">
                    {product.description}
                  </CardContent>
                  <p className="flex items-center m-5">
                    <StarRating rating={Math.round(product.rating)} />
                  </p>
                  <CardFooter>
                    <p className="text-lg"> ${product.price}</p>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="text-xs ml-5 hover:bg-yellow-300 hover:text-black"
                      size="sm"
                    >
                      Add to cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DisplayCard;
