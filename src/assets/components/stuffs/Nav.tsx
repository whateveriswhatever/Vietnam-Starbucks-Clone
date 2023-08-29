// import { useState, useContext, useEffect } from "react";
import { useState } from "react";
// import Coffe from "../NavBarofNavBar/Coffe";
// import Menu from "../NavBarofNavBar/Menu";
import About_Us from "../NavBarofNavBar/About_Us";
import { Card } from "../NavBarofNavBar/Card";
import Responsibility from "../NavBarofNavBar/Responsibility";
import CoffeHouse from "../NavBarofNavBar/CoffeHouse";
import { Skeptical } from "../../../Skeptical";

const Nav: React.FC<Skeptical> = ({ setIsDisplayed, setDisplayedWhat }) => {
  return (
    <nav
      id="nav"
      style={{
        position: "relative",
        float: "left",
        clear: "none",
        marginLeft: "18.8rem",
        marginTop: "-2.9rem",
        // fontSize: "1.1rem",
      }}
    >
      <NavControl />
      <NavMenu
        setIsDisplayed={setIsDisplayed}
        setDisplayedWhat={setDisplayedWhat}
      />
    </nav>
  );
};

export default Nav;

const NavControl: React.FC = () => {
  return (
    <div className="nav_control">
      <a href="#nav">
        <span className="hamburger"></span>
        <span className="hidden_visually">Navigation</span>
      </a>
    </div>
  );
};

const NavMenu: React.FC<Skeptical> = ({ setIsDisplayed, setDisplayedWhat }) => {
  const [isHover, setIsHover] = useState(false);
  const [identity, setIdentity] = useState("");

  return (
    <div className="nav_menu">
      <ul
        id="control_options"
        style={{
          display: "inline-flex",
        }}
      >
        {/* <NavMenuOptions
          id="nav_0"
          href="/ca-phe/"
          detail="CÀ PHÊ"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        /> */}
        <li
          id="nav_0"
          className=""
          style={{
            marginRight: "2rem",
            backgroundColor: isHover && identity === "Coffee" ? "#000" : "#fff",
            marginBottom: "-1.4rem",
          }}
          onClick={() => console.log("OK")}
          onMouseEnter={() => {
            setIsHover(true);
            setIdentity("Coffee");
            setIsDisplayed(true);
            setDisplayedWhat("Coffee");
            // setDisplayedWhat("Coffee");
            // setDisplayedWhat("Coffee")
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIdentity("");
            setIsDisplayed(false);
            // setDisplayedWhat("");
          }}
        >
          <div className="null_left"></div>
          <a
            className="tab"
            href="/ca-phe/"
            // onMouseEnter={() => {
            //   setIsHover(true);
            //   setIdentity("Coffee");
            //   setIsDisplayed(true);
            // }}
            // onMouseLeave={() => {
            //   setIsHover(false);
            //   setIdentity("");
            //   setIsDisplayed(false);
            // }}
            onClick={() => {
              console.log(`ok`);
            }}
          >
            <strong
              style={{
                color: isHover && identity === "Coffee" ? "#fff" : "#000",
                fontSize: "1rem",
                fontStyle: "normal",
              }}
            >
              CÀ PHÊ
            </strong>
          </a>
          <br />
          {/* {isHover && identity === "Coffee" ? <Coffe /> : <></>} */}
          {/* {isHover && identity === "Coffee" ? <MegaNavs /> : <></>} */}
        </li>
        {/* <NavMenuOptions
          id="nav_1"
          href="/thuc-don/"
          detail="THỰC ĐƠN"
          onMouseEnter={() => {
            setIsHover(true);
            setIdentity("Menu");
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIdentity("");
          }}
        /> */}

        <li
          id="nav_1"
          style={{
            marginRight: "2rem",
            backgroundColor: isHover && identity === "Menu" ? "#000" : "#fff",
          }}
          onMouseEnter={() => {
            setIsHover(true);
            //setIdentity("Menu");
            setIsDisplayed(true);
            setDisplayedWhat("Menu");
          }}
          onMouseLeave={() => {
            setIsHover(false);
            //setIdentity("");
            setIsDisplayed(false);
            setDisplayedWhat("");
          }}
          onClick={() => {
            //
          }}
        >
          <div className="null_left"></div>
          <a
            className="tab"
            href=""
            // onMouseEnter={() => {
            //   setIsHover(true);
            //   setIdentity("");
            //   setIsDisplayed(true);
            // }}
            // onMouseLeave={() => {
            //   setIsHover(false);
            //   setIdentity("");
            //   setIsDisplayed(false);
            // }}
          >
            <strong
              style={{
                color: isHover && identity === "Menu" ? "#fff" : "#000",
                fontSize: "1rem",
                fontStyle: "normal",
              }}
            >
              THỰC ĐƠN
            </strong>
          </a>
          <div className="null_right"></div>
        </li>

        {/* {isHover && identity === "Menu" ? <Menu /> : <></>} */}
        <NavMenuOptions
          id="nav_2"
          href="/quan-ca-phe/"
          detail="QUÁN CÀ PHÊ"
          onMouseEnter={() => {
            setIsHover(true);
            setIdentity("Coffe Shop");
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIdentity("");
          }}
        />
        {isHover && identity === "Coffe Shop" ? <CoffeHouse /> : <></>}
        <NavMenuOptions
          id="nav_3"
          href="/trach-nhiem/"
          detail="TRÁCH NHIỆM"
          onMouseEnter={() => {
            setIsHover(true);
            setIdentity("Responsibility");
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIdentity("");
          }}
        />
        {isHover && identity === "Responsibility" ? <Responsibility /> : <></>}
        <NavMenuOptions
          id="nav_4"
          href="/ve-chung-toi/"
          detail="VỀ CHÚNG TÔI"
          onMouseEnter={() => {
            setIsHover(true);
            setIdentity("About us");
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIdentity("");
          }}
        />
        {isHover && identity === "About us" ? <About_Us /> : <></>}
        <NavMenuOptions
          id="nav_5"
          href="/the/"
          detail="THẺ"
          onMouseEnter={() => {
            setIsHover(true);
            setIdentity("Card");
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIdentity("");
          }}
        />
        {isHover && identity === "Card" ? <Card /> : <></>}
      </ul>
    </div>
  );
};

type TypeOptionsinMenu = {
  id: string;
  href: string;
  detail: string;
  onMouseEnter: any;
  onMouseLeave: any;
  // componentRendered: React.FC;
  // validator: boolean;
  // checkmark: string;
};

interface IOptionsinMenu {
  id: string;
  href: string;
  detail: string;
  onMouseEnter: any;
  onMouseLeave: any;
}

const NavMenuOptions: React.FC<IOptionsinMenu> = ({
  id,
  href,
  detail,
  onMouseEnter,
  onMouseLeave,
}: //validator,
// checkmark,
//componentRendered,
// componentRendered,
// validator,
TypeOptionsinMenu) => {
  // const [isHover, setIsHover] = useState(false);
  // const [identify, setIdentify] = useState("");

  // if (isHover && identify === "CÀ PHÊ") {
  // } else if (isHover && identify === "THỰC ĐƠN") {
  // } else if (isHover && identify === "QUÁN CÀ PHÊ") {
  // } else if (isHover && identify === "TRÁCH NHIỆM") {
  // } else if (isHover && identify === "VỀ CHÚNG TÔI") {
  // } else {
  //   setIdentify("");
  // }

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  //   setIdentify(detail);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  //   setIdentify("");
  // };
  // console.log(
  //   `validator: ${validator} - componentRendered: ${componentRendered}`
  // );
  return (
    <li id={id} className="" style={{ marginRight: "2rem" }}>
      <div className="null_left"></div>
      <a
        className="tab"
        href={href}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <strong
          style={{ color: "#000", fontSize: "1rem", fontStyle: "normal" }}
        >
          {detail}
        </strong>
      </a>
      <div className="null_right"></div>
    </li>
  );
};
