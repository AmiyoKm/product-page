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

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [cart, setCart] = React.useState<Cart[]>([]);
  const [filter, setFilter] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

 async function fetchData() {

      try {
          setLoading(true)
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          if (data) {
              setData(data.products)
              console.log(data.products)
          }
          setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }
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
  function handleInput(input: string) {
    const newFilter = data?.filter((product :any) =>
      product?.title?.toLowerCase().includes(input.toLowerCase())
    );
    if (newFilter) {
      setFilter(newFilter);
    }
    
  }
  return (
    <GlobalContext.Provider value={{ data, setData, loading, setLoading, cart, setCart , handleAddToCart , handleRemoveCart ,filter, setFilter, handleInput}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
