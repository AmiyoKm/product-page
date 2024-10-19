import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayCard from "./Home/DisplayCard";
import Navbar from "./Navbar/Navbar";
import Cart from "./Cart/Cart";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <header><Navbar /></header>
          
          <Routes>
            <Route path={"/"} element={<DisplayCard />} />
            <Route path={"/Cart"} element={<Cart />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
