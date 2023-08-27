//import React from 'react'

const FooterMain = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="grid">
          <div
            className="footer_global accordion"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,14rem)",
              gap: "4rem",
              gridAutoRows: "minmax(100px, auto)",
            }}
          >
            <AboutUs />
            <CustomerServices />
            <ConnectNow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

const AboutUs: React.FC = () => {
  return (
    <div
      className="info_block column size12of12 med_size4of12 lg_size2of12"
      style={{
        display: "block",
        width: "13rem",
        fontWeight: "700",
        color: "#000",
      }}
    >
      <h4 style={{ marginLeft: "-0.1px" }}>VỀ CHÚNG TÔI</h4>
      <ol style={{ marginLeft: "-0.1px" }}>
        <Li
          href="https://starbucks.vn/ve-chung-toi/di-san/"
          title="Di sản"
          detail="Di sản"
          color="#3d3935"
        />
        <Li
          href="https://starbucks.vn/ve-chung-toi/cong-ty/"
          title="Công ty"
          detail="Công ty"
          color="#3d3935"
        />
        <Li
          href="https://starbucks.vn/ve-chung-toi/co-hoi-nghe-nghiep/"
          title="Cơ hội nghề nghiệp"
          detail="Cơ hội nghề nghiệp"
          color="#3d3935"
        />
      </ol>
    </div>
  );
};

const CustomerServices: React.FC = () => {
  return (
    <div
      className="info_block column size12of12 med_size4of12 lg_size2of12"
      style={{ display: "block", width: "16.8rem", marginLeft: "-2rem" }}
    >
      <h4 style={{ marginLeft: "-0.1px", fontWeight: "bold" }}>
        <a
          href="https://starbucks.vn/dich-vu-khach-hang/"
          style={{ color: "#000" }}
        >
          DỊCH VỤ KHÁCH HÀNG
        </a>
      </h4>
      <ol style={{ marginLeft: "-0.1px" }}>
        <Li
          href="https://starbucks.vn/dich-vu-khach-hang/cau-hoi-thuong-gap/"
          title="Câu hỏi Thường Gặp"
          detail="Câu hỏi Thường Gặp"
          color="#3d3935"
        />
      </ol>
    </div>
  );
};

const ConnectNow: React.FC = () => {
  return (
    <div
      className="info_block column size12of12 med_size4of12 lg_size2of12"
      style={{
        display: "block",
        width: "16.8rem",
        fontWeight: "700",
        color: "#000",
      }}
    >
      <h4 style={{ marginLeft: "-0.1px" }}>LIÊN KẾT NHANH</h4>
      <ol style={{ marginLeft: "-0.1px" }}>
        <Li
          href="https://starbucks.vn/store-locator/"
          title="Bộ định vị Cửa hàng"
          detail="Bộ định vị Cửa hàng"
          color="#3d3935"
        />
        <Li
          href="http://www.starbucks.com/account/partneracct/idmlogin"
          title="Dành cho Đối tác"
          detail="Dành cho Đối tác"
          color="#3d3935"
        />
      </ol>
    </div>
  );
};

interface ILi {
  href: string;
  title: string;
  detail: string;
  color: string;
}

type LiType = {
  href: string;
  title: string;
  detail: string;
  color: string;
};

export const Li: React.FC<ILi> = ({ href, title, detail, color }: LiType) => {
  return (
    <li className="whatever">
      <a
        href={href}
        title={title}
        style={{ color: color, fontWeight: "normal", fontSize: "1.2rem" }}
      >
        {detail}
      </a>
    </li>
  );
};
