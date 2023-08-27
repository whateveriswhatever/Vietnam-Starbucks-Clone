import StarbuckLogo from "./stuffs/StarbuckLogo";
import Utilities from "./stuffs/Utilities";
import Nav from "./stuffs/Nav";
const Header = () => {
  return (
    <header className="header_container">
      <div className="grid">
        <div className="column size12of12">
          <div id="header">
            <StarbuckLogo />
            <Utilities />
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
