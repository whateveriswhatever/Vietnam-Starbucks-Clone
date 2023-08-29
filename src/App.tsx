// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";
import MegaNavs from "./assets/components/MegaNavs";
import MegaNavs1 from "./assets/components/MegaNavs1";
import { useState } from "react";
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
      {isDisplayed && displayedWhat === "Coffee" ? <MegaNavs /> : null}
      {/* <MegaNavs /> */}
      {/* </UserContext.Provider> */}
      {/* <MegaNavs /> */}
      {isDisplayed && displayedWhat === "Menu" ? <MegaNavs1 /> : null}
      <Main />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
