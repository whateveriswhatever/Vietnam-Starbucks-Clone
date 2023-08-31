// import React from "react";
import { LiTagSample } from "./Coffe";
import { useState } from "react";

export const Card = () => {
  return (
    <li className="fields" id="menu_5">
      <Component1 />
      <Component2 />
    </li>
  );
};

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
          gridTemplateColumns: "repeat(3, 0.3fr)",
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
        Đang tìm kiếm vị trí cửa hàng{" "}
      </p>
      <SuggestedLink />
    </div>
  );
};

const Component2: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="region size1of5 menu_promo"
      style={{
        float: "right",
        marginTop: "-20.8rem",
        backgroundColor: isHovered ? "green" : "#1e1e1e",
        textAlign: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="https://card.starbucks.vn/en/sign-in" target="_self">
        <p>
          <img
            src="https://starbucks.vn/media/wyldxria/card-teaser_tcm89-25200.jpg"
            alt="Starbucks Rewards"
          />
        </p>
        <p></p>
        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "-2rem",
            color: "#fff",
            lineHeight: "1.4rem",
            width: "10rem",
            fontWeight: "700",
            marginLeft: "3.4rem",
          }}
        >
          <strong>
            Nhận ngôi sao điểm thưởng cho mỗi chi tiêu tại Starbucks.
          </strong>
        </p>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "-1.8rem",
            lineHeight: "1.3rem",
            fontWeight: "500",
            marginLeft: "1.2rem",
          }}
        >
          Đăng ký Starbucks Rewards™ ngay hôm nay
        </p>
        <p></p>
      </a>
    </div>
  );
};

const Li1: React.FC = () => {
  return (
    <li>
      <p>
        <a
          href="https://card.starbucks.vn/en/"
          style={{ color: "#fff", fontSize: "1.2rem" }}
        >
          Quản Lý Tài Khoản
        </a>
      </p>
      <ol style={{ marginTop: "-0.2rem", lineHeight: "1rem" }}>
        <LiTagSample
          href="http://card.starbucks.vn/en/Account/Login"
          detail="Đăng nhập/Đăng ký tài khoản mới"
          styleMarginTop=""
        />
        <LiTagSample
          href="http://card.starbucks.vn/en/sign-in"
          detail="Lịch sử giao dịch"
          styleMarginTop=""
        />
        <LiTagSample
          href="http://card.starbucks.vn/en/sign-in"
          detail="Báo mất thẻ"
          styleMarginTop=""
        />
      </ol>
    </li>
  );
};

const Li2: React.FC = () => {
  return (
    <li style={{ marginTop: "0.48rem" }}>
      <p style={{ color: "#fff", fontSize: "1.2rem" }}> Thông Tin Khác </p>
      <ol style={{ marginTop: "-0.2rem", lineHeight: "1rem" }}>
        <LiTagSample
          href="https://card.starbucks.vn/en/"
          detail="Starbucks Rewards™"
          styleMarginTop=""
        />
        <LiTagSample
          href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/starbucks-rewards-terms-and-conditions/"
          detail="Điều kiện và điều khoản chương trình"
          styleMarginTop=""
        />
        <LiTagSample
          href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/chi-nh-sa-ch-ba-o-ma-t-thong-tin/"
          detail="Chính sách về quyền riêng tư"
          styleMarginTop=""
        />
        <LiTagSample
          href="https://starbucks.vn/ve-chung-toi/cong-ty/chinh-sach-truc-tuyen/starbucks-rewards-faqs/"
          detail="Câu hỏi thường gặp chương trình Starbucks Rewards™"
          styleMarginTop=""
        />
      </ol>
    </li>
  );
};

const Li3: React.FC = () => {
  return (
    <li style={{ marginTop: "0.48rem" }}>
      <p style={{ color: "#fff", fontSize: "1.2rem" }}>
        {" "}
        Thẻ quà tặng điện tử{" "}
      </p>
      <ol style={{ marginTop: "-0.2rem", lineHeight: "1rem" }}>
        <LiTagSample
          href="https://card.starbucks.vn/en/landing-egift"
          detail="Gửi thẻ quà tặng ngay"
          styleMarginTop=""
        />
      </ol>
    </li>
  );
};

const SuggestedLink: React.FC = () => {
  return (
    <ul
      className="menu_suggestion_links"
      style={{ marginLeft: "1rem", fontSize: "1.2rem" }}
    >
      <li
        className="navGroup_menu_sugList_item"
        style={{ marginTop: "-0.5rem" }}
      >
        Bộ định vị Cửa hàng
      </li>
    </ul>
  );
};
