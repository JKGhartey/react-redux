import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./pages/products";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route index path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
