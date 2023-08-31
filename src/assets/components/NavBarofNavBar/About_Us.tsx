// import React from "react";
import { LiTagSample } from "./Coffe";
import { useState } from "react";
const About_Us: React.FC = () => {
  return (
    <li className="fields" id="menu_4">
      <Component1 />
      <Component2 />
    </li>
  );
};

export default About_Us;

const Component1: React.FC = () => {
  return (
    <div
      className="region size4of5 menu_content"
      style={{ backgroundColor: "#1e1e1e", marginTop: "5rem" }}
    >
      <ol
        className="blocks blocks-four-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,0.2fr)",
          marginTop: "-1rem",
        }}
      >
        <Li1 />
        <Li2 />
        <Li3 />
      </ol>
      <p
        className="menu_suggestion_title"
        style={{ color: "#e6e8e8", clear: "both", fontSize: "1.4rem" }}
      >
        {" "}
        Bạn đang tìm kiếm Vị trí Cửa hàng?
      </p>
      <SuggestedLink />
    </div>
  );
};

const Component2: React.FC = () => {
  return (
    <div
      className="region size1of5 menu_promo"
      style={{ float: "right", marginTop: "-23rem" }}
    >
      <div className="anchor">
        <p>
          <img
            src="https://starbucks.vn/media/jl4nrlxy/teaser01_tcm89-3390.jpg"
            alt="Starbucks Rewards"
          />
        </p>
        <p></p>
        <p style={{ fontSize: "1.2rem", marginTop: "-1.6rem" }}>
          <strong>Một Loại Công ty Khác</strong>
        </p>
        <p style={{ fontSize: "0.8rem", marginTop: "-2.5rem" }}>
          Sứ mệnh của chúng tôi là khơi nguồn cảm hứng và nuôi dưỡng tinh thần
          con người – một người, một cốc cà phê và một tình hàng xóm vào một
          thời điểm.
        </p>
        <p></p>
      </div>
    </div>
  );
};

const Li1: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li>
      <p>
        <a
          href="https://starbucks.vn/ve-chung-toi/di-san/"
          style={{
            color: "#fff",
            fontSize: "1rem",
            backgroundColor: isHovered ? "green" : "#1e1e1e",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Di sản
        </a>
      </p>
    </li>
  );
};

const Li2: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li style={{ marginTop: "0.8rem", lineHeight: "1rem" }}>
      <p>
        <a
          href="https://starbucks.vn/ve-chung-toi/cong-ty/"
          style={{
            color: "#fff",
            fontSize: "1rem",
            backgroundColor: isHovered ? "green" : "#1e1e1e",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Công ty
        </a>
        <ol>
          <LiTagSample
            href="https://starbucks.vn/ve-chung-toi/cong-ty/tuyen-bo-ve-su-menh/"
            detail="Tuyên bố về Sứ mệnh"
            styleMarginTop=""
          />
          <LiTagSample
            href="https://starbucks.vn/ve-chung-toi/cong-ty/dao-duc-va-tuan-thu-trong-kinh-doanh/"
            detail="Đạo đức và Tuân thủ trong Kinh doanh"
            styleMarginTop=""
          />
          <LiTagSample
            href="https://starbucks.vn/ve-chung-toi/cong-ty/su-da-dang-tai-starbucks/"
            detail="Sự đa dạng tại Starbucks"
            styleMarginTop=""
          />
          <LiTagSample
            href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/"
            detail="Chính sách Trực tuyến"
            styleMarginTop=""
          />
        </ol>
      </p>
    </li>
  );
};

const Li3: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li>
      <p>
        <a
          href="https://starbucks.vn/ve-chung-toi/co-hoi-nghe-nghiep/"
          style={{
            color: "#fff",
            fontSize: "1rem",
            backgroundColor: isHovered ? "green" : "#1e1e1e",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Cơ hội nghề nghiệp
        </a>
      </p>
    </li>
  );
};

const SuggestedLink: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ul
      className="menu_suggestion_links"
      style={{ display: "inline-flex", marginLeft: "1rem" }}
    >
      <li className="navGroup_menu_sugList_item">
        <a
          className="link"
          href="https://starbucks.vn/dich-vu-khach-hang/"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            backgroundColor: isHovered ? "green" : "#1e1e1e",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Dịch vụ Khách hàng
        </a>
      </li>
      <li
        className="navGroup_menu_sugList_item"
        style={{
          color: "#fff",
          fontSize: "1.2rem",
          marginTop: "0.3rem",
          marginLeft: "1rem",
        }}
      >
        Bộ định vị Cửa hàng
      </li>
    </ul>
  );
};
