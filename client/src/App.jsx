import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import MainLayout from "./layout/MainLayout";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        //FIXME: index page renders ?
        <Route path="products">
          <Route path="dresses" element={<ProductList />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*">404</Route>
    </Routes>
  );
}

export default App;
