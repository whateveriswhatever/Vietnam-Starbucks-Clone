// import React from 'react'
import { Li } from "./FooterMain";
const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="grid">
          <Column1 />
          <Column2 />
          <Column3 />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

const Column1: React.FC = () => {
  return (
    <div className="column size12of12">
      <ul className="site_selection">
        <li className="change">
          <a className="culture" href="/">
            <span>
              <img
                className="flag"
                src="https://starbucks.vn/assets/images/VietNam_tcm89-24771_w1024_n.png"
                alt="Vietnam"
                data-aspect="0"
              />
            </span>
          </a>
        </li>
        <li className="native language" style={{ fontSize: "1rem" }}>
          Tiếng Việt (VN)
        </li>
        <li className="change language">
          <a href="https://en.starbucks.vn/" title="English">
            English
          </a>
        </li>
      </ul>
    </div>
  );
};

const Column2: React.FC = () => {
  return (
    <div className="column size12of12">
      <ul
        className="footer-sub"
        style={{
          display: "inline-flex",
          fontSize: "0.1rem",
          gap: "4px",
        }}
      >
        <Li
          href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/kha-nang-truy-cap-web/"
          title="Khả năng truy cập Web"
          detail="Khả năng truy cập Web"
          color="#666"
        />
        <Li
          href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/chi-nh-sa-ch-ba-o-ma-t-thong-tin/"
          title="Chính Sách Bảo Mật Thông Tin"
          detail="Chính Sách Bảo Mật Thông Tin"
          color="#666"
        />
        <Li
          href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/dieu-khoan-su-dung/"
          title="Điều khoản Sử dụng"
          detail="Điều khoản Sử dụng"
          color="#666"
        />
        <Li
          href="https://starbucks.vn/site-map/"
          title="Sơ đồ Trang web"
          detail="Sơ đồ Trang web"
          color="#666"
        />
        <Li
          href=""
          title="Cookie Preferences, opens a dedicated popup modal window"
          detail="Tùy Chọn Cookie"
          color="#666"
        />
      </ul>
      {/* <div
        className="tesconsent_showBorder"
        id="tesconsent"
        aria-label="Open Cookie Preferences"
        role="complementary"
      >
        <a
          role="link"
          id="icon-id021143643612683594"
          tabIndex={0}
          lang="vi"
          aria-label="Cookie Preferences, opens a dedicated popup modal window"
          className="truste_cursor_pointer"
          href=""
        >
          Tùy Chọn Cookie
        </a>
      </div> */}
    </div>
  );
};

const Column3: React.FC = () => {
  return (
    <div className="column size12of12">
      <p className="footer_copyright">
        © 2023 Starbucks Coffee Company. Mọi quyền được bảo lưu.
      </p>
    </div>
  );
};
