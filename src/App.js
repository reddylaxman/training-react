//rac,rafc,rcc
import React from "react";
// import { Navbar } from "./components/Navbar";
// import { Main } from "./components/Main";
// import { Sidebar1 } from "./components/Sidebar1";
// import { Sidebar2 } from "./components/Sidebar2";
// import { Footer } from "./components/Footer";
// import CBCPropEx from "./props/CBCPropEx";
// import { FBCPropEx } from "./props/FBCPropEx";
// import { PropChildEx } from "./props/PropChildEx";
// import { SubChild } from "./props/SubChild";
// import CBCStatesEx from "./States/CBCStatesEx";
import FBCStatesEx from "./States/FBCStatesEx";

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
    // <div className="app">
    // <CBCPropEx 
    // username="kalki" 
    // age={2898} 
    // hobbies={["complex","bounty","units"]}
    // address={{city:"Kasi",area:"shambala"}} 
    // sendFun={function(){alert("Rebel *")}}
    // />
    // </div>
    // <div><FBCPropEx username="Laxman Reddy" isMarried={false} hobbies={["Reading","Learning"]}/></div>
    // <PropChildEx num={10}>
    
    // <h1>This is data coming from children</h1>
    // <SubChild/>
    // </PropChildEx>
    <FBCStatesEx/>
  );
};
export default App;
