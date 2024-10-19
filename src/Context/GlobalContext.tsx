import React from "react";
interface GlobalContextProps {
  children?: React.ReactNode;
}
export interface Cart {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  rating: number;
}
export const GlobalContext = React.createContext({});
const GlobalStateContext = ({ children }: GlobalContextProps) => {
  const [cart, setCart] = React.useState<Cart[]>([]);
  function handleAddToCart(item: Cart) {
    setCart([...cart, item]);
  }
  function handleRemoveCart(item:Cart){
    const newCart = cart.filter((product :Cart)=>
      product.id !== item.id
    )

    if(newCart){
      setCart(newCart)
    }
    

  }
  return (
    <GlobalContext.Provider value={{ cart, setCart , handleAddToCart , handleRemoveCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
