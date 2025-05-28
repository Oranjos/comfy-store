import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <>
      <h2 className="text-7xl font-bold underline">header</h2>
      <About />
    </>
  );
}

export default App;
