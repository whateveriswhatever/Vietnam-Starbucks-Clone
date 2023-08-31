// import React from "react";
import Coffe from "../NavBarofNavBar/Coffe";
// import { UserContext } from "../../UserContext";
// import { useState } from "react";
// import Menu from "./NavBarofNavBar/Menu";
const MegaNavs: React.FC = () => {
  return (
    <div className="megaNav" id="menus" style={{ marginTop: "5rem" }}>
      <ol className="container" style={{ marginTop: "-5rem" }}>
        {/* <Coffe displayedSelection="none" /> */}
        {/* <Menu /> */}
        {/* {setDisplayedWhat === "Menu" ? <Menu /> : null} */}
        {/* {console.log(setDisplayedWhat)} */}
        {/* {selection === "Menu" ? (
          <Menu />
        ) : selection === "Coffee" ? (
          <Coffe displayedSelection="block" />
        ) : null} */}
        <Coffe />
      </ol>
    </div>
  );
};

export default MegaNavs;
