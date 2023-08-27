// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <aside className="notificationBar notificationBar--shop"></aside>
      <Header />
      <Main />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;