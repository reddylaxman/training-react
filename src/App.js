//rac,rafc,rcc
import React from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Sidebar1 } from "./components/Sidebar1";
import { Sidebar2 } from "./components/Sidebar2";
import { Footer } from "./components/Footer";
import CBCPropEx from "./props/CBCPropEx";

export const App = () => {
  return (
    // <div className="app">
    //   <Navbar />
    //   <Main />
    //   <div className="sidebar">
    //     <Sidebar1 />
    //     <Sidebar2 />
    //   </div>
    //   <Footer />
    // </div>
    <div>
      <CBCPropEx username="kalki" />
    </div>
  );
};
export default App;
