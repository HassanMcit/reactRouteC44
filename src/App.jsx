import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Brands from "./Components/Brands/Brands";
import Catgories from "./Components/Catgories/Catgories";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Product from "./Components/Product/Product";
import Register from "./Components/Register/Register";
import Design from "./Components/Design/Design";

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Design />,
      children: [
        { path: "", element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "Product", element: <Product /> },
        { path: "Categories", element: <Catgories /> },
        { path: "Brands", element: <Brands /> },
        { path: "Register", element: <Register /> },
        { path: "Login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={x}></RouterProvider> 
      {/* provider */}
      {/* <Home>
        <Product></Product>
      </Home> */}
    </>
  );
}

export default App;
