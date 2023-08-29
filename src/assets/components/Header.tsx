import StarbuckLogo from "./stuffs/StarbuckLogo";
import Utilities from "./stuffs/Utilities";
import Nav from "./stuffs/Nav";
import { Skeptical } from "../../Skeptical";
const Header: React.FC<Skeptical> = ({ setIsDisplayed, setDisplayedWhat }) => {
  return (
    <header className="header_container">
      <div className="grid">
        <div className="column size12of12">
          <div id="header">
            <StarbuckLogo />
            <Utilities />
            <Nav
              setIsDisplayed={setIsDisplayed}
              setDisplayedWhat={setDisplayedWhat}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
