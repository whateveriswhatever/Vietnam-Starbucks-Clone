// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";
import MegaNavs from "./assets/components/MegaNavsCollections/MegaNavs";
import MegaNavs1 from "./assets/components/MegaNavsCollections/MegaNavs1";
import MegaNavs2 from "./assets/components/MegaNavsCollections/MegaNavs2";
import MegaNavs3 from "./assets/components/MegaNavsCollections/MegaNavs3";
import MegaNavs4 from "./assets/components/MegaNavsCollections/MegaNavs4";
import { useState } from "react";
import MegaNavs5 from "./assets/components/MegaNavsCollections/MegaNavs5";
// import { UserContext } from "./UserContext";

function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [displayedWhat, setDisplayedWhat] = useState("");
  // useEffect(() => {
  //   console.log(`Current value of isDisplayed: ${isDisplayed}`);
  //   console.log(`Current value of displayedWhat: ${displayedWhat}`);
  // }, [isDisplayed, displayedWhat]);
  return (
    <>
      <aside className="notificationBar notificationBar--shop"></aside>
      <Header
        setIsDisplayed={setIsDisplayed}
        setDisplayedWhat={setDisplayedWhat}
      />
      {/* <UserContext.Provider value={{isDisplayed, setIsDisplayed}}> */}
      {/* <MegaNavs /> */}
      {/* {isDisplayed && displayedWhat === "Coffee" ? (
        <MegaNavs selection="Coffe" />
      ) : isDisplayed && displayedWhat === "Menu" ? (
        <MegaNavs selection="Menu" />
      ) : null} */}
      {/* {isDisplayed ? <MegaNavs selection="Coffee" /> : null} */}
      {/* {isDisplayed && displayedWhat === "Coffee" ? <MegaNavs /> : null} */}
      {/* <MegaNavs /> */}
      {/* </UserContext.Provider> */}
      {/* <MegaNavs /> */}
      {/* {isDisplayed && displayedWhat === "Menu" ? <MegaNavs1 /> : null} */}
      {/* <MegaNavs2 /> */}
      {/* {isDisplayed && displayedWhat === "Coffee Shop" ? <MegaNavs2 /> : null} */}
      {/* <MegaNavs3 /> */}
      {/* {isDisplayed && displayedWhat === "Responsibility" ? <MegaNavs3 /> : null} */}
      {isDisplayed && displayedWhat === "Coffee" ? (
        <MegaNavs />
      ) : isDisplayed && displayedWhat === "Menu" ? (
        <MegaNavs1 />
      ) : isDisplayed && displayedWhat === "Coffee Shop" ? (
        <MegaNavs2 />
      ) : isDisplayed && displayedWhat === "Responsibility" ? (
        <MegaNavs3 />
      ) : isDisplayed && displayedWhat === "About Us" ? (
        <MegaNavs4 />
      ) : isDisplayed && displayedWhat === "Card" ? (
        <MegaNavs5 />
      ) : null}
      {/* <MegaNavs /> */}
      {/* <MegaNavs1 /> */}
      {/* <MegaNavs2 /> */}
      {/* <MegaNavs3 /> */}
      {/* <MegaNavs4 /> */}
      {/* <MegaNavs5 /> */}
      <Main />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
