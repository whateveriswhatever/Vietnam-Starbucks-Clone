const Nav: React.FC = () => {
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
      <NavMenu />
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

const NavMenu: React.FC = () => {
  return (
    <div className="nav_menu">
      <ul
        id="control_options"
        style={{
          display: "inline-flex",
        }}
      >
        <NavMenuOptions id="nav_0" href="/ca-phe/" detail="CÀ PHÊ" />
        <NavMenuOptions id="nav_1" href="/thuc-don/" detail="THỰC ĐƠN" />
        <NavMenuOptions id="nav_2" href="/quan-ca-phe/" detail="QUÁN CÀ PHÊ" />
        <NavMenuOptions id="nav_3" href="/trach-nhiem/" detail="TRÁCH NHIỆM" />
        <NavMenuOptions
          id="nav_4"
          href="/ve-chung-toi/"
          detail="VỀ CHÚNG TÔI"
        />
        <NavMenuOptions id="nav_5" href="/the/" detail="THẺ" />
      </ul>
    </div>
  );
};

type TypeOptionsinMenu = {
  id: string;
  href: string;
  detail: string;
};

interface IOptionsinMenu {
  id: string;
  href: string;
  detail: string;
}

const NavMenuOptions: React.FC<IOptionsinMenu> = ({
  id,
  href,
  detail,
}: TypeOptionsinMenu) => {
  return (
    <li id={id} className="" style={{ marginRight: "2rem" }}>
      <div className="null_left"></div>
      <a className="tab" href={href}>
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
