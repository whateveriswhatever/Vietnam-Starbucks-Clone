import React from "react";
import { useState } from "react";

const Coffe: React.FC<{ displayedSelection?: string }> = () => {
  return (
    <li className="fields" id="menu_0">
      <div className="region size4of5 menu_content">
        <ol
          className="blocks blocks-four-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 0.5fr)",
            marginLeft: "-2rem",
          }}
        >
          <Li1 />
          <Li2 />
          <Li3 />
          <Li4 />
          <br />
          <Li5 />
          <Li6 />
        </ol>
        <p
          className="menu_suggestion_title"
          style={{ color: "#fff", clear: "both", fontSize: "1.4rem" }}
        >
          Bạn đang tìm kiếm các loại Đồ uống Cà phê?
        </p>
        <ul
          className="menu_suggestion_links"
          style={{ position: "relative", marginLeft: "1rem" }}
        >
          <li
            className="navGroup_menu_sugList_item"
            style={{ marginTop: "-1rem" }}
          >
            <a
              className="link"
              href="https://starbucks.vn/thuc-don/thuc-uong/"
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              Thức uống
            </a>
          </li>
        </ul>
      </div>
      <Component2 />
    </li>
  );
};

export default Coffe;

const Li1: React.FC = () => {
  return (
    <li id="li1" style={{ display: "flex", marginLeft: "1rem" }}>
      <p style={{ marginTop: "-1rem" }}>
        <a
          href="https://starbucks.vn/ca-phe/ca-phe-cua-chung-toi/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Cà phê của Chúng tôi
        </a>
        <ol style={{ marginTop: "-0.8rem" }}>
          <li>
            <a
              href="https://starbucks.vn/ca-phe/ca-phe-cua-chung-toi/format/whole-bean/"
              style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "400" }}
            >
              Cà phê Nguyên Hạt
            </a>
          </li>
          <li style={{ marginTop: "-1.2rem" }}>
            <a
              href="https://starbucks.vn/ca-phe/ca-phe-cua-chung-toi/view-all-coffee/"
              style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "400" }}
            >
              Xem Tất cả các loại Cà phê
            </a>
          </li>
        </ol>
      </p>
    </li>
  );
};

const Li2: React.FC = () => {
  return (
    <li style={{ display: "flex" }}>
      <p style={{ marginTop: "-1rem" }}>
        <a
          href="https://starbucks.vn/ca-phe/coffee-finder/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Tìm loại Cà phê Hoàn hảo của Bạn
        </a>
      </p>
    </li>
  );
};

const Li3: React.FC = () => {
  return (
    <li style={{ display: "flex" }}>
      <p style={{ marginTop: "-1rem" }}>
        <a
          href="https://starbucks.vn/ca-phe/espresso/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Espresso
        </a>
      </p>
      <ol style={{ marginTop: "0.5rem", marginLeft: "-3.5rem" }}>
        <LiTagSample
          href="https://starbucks.vn/ca-phe/espresso/thanh-phan/"
          detail="Thành phần"
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/espresso/thiet-bi-tot-nhat/"
          detail="Thiết bị Tốt nhất"
          styleMarginTop="-1rem"
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/espresso/nhan-vien-pha-che-ca-phe/"
          detail="Nhân viên Pha chế Cà phê"
          styleMarginTop="-1rem"
        />
        {/* <li>
          <a href="https://starbucks.vn/ca-phe/espresso/thanh-phan/">
            Thành phần
          </a>
        </li> */}
      </ol>
    </li>
  );
};

const Li4: React.FC = () => {
  return (
    <li style={{ display: "flex" }}>
      <p style={{ marginTop: "-1rem" }}>
        <a
          href="https://starbucks.vn/ca-phe/cach-pha-ca-phe/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Cách Pha Cà phê
        </a>
      </p>
      <ol style={{ marginLeft: "-6.8rem" }}>
        <LiTagSample
          href="https://starbucks.vn/ca-phe/cach-pha-ca-phe/coffee-press/"
          detail="Coffee Press"
          styleMarginTop="6px"
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/cach-pha-ca-phe/pour-over/"
          detail="Pour-Over"
          styleMarginTop="-0.85rem"
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/cach-pha-ca-phe/iced-pour-over/"
          detail="Iced Pour-Over"
          styleMarginTop="-0.8rem"
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/cach-pha-ca-phe/coffee-brewer/"
          detail="Coffee Brewer"
          styleMarginTop="-0.8rem"
        />
      </ol>
    </li>
  );
};

const Li5: React.FC = () => {
  return (
    <li style={{ display: "flex", marginLeft: "-16rem", marginTop: "-3rem" }}>
      <p>
        <a
          href="https://starbucks.vn/ca-phe/tim-nguon-cung-ung-co-dao-duc/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Tìm nguồn Cung ứng có Đạo đức
        </a>
        <ol>
          <LiTagSample
            href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/tim-nguon-cung-ung-ca-phe/"
            detail="Cà phê được Vun trồng có Trách nhiệm"
            styleMarginTop="-1rem"
          />
          <LiTagSample
            href="https://starbucks.vn/ca-phe/tim-nguon-cung-ung-co-dao-duc/chat-luong-ca-phe/"
            detail="Chất lượng cà phê"
            styleMarginTop="-1.3rem"
          />
          <LiTagSample
            href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/ho-tro-nong-dan/"
            detail="Hỗ trợ Nông dân"
            styleMarginTop="-1.3rem"
          />
        </ol>
      </p>
    </li>
  );
};

const Li6: React.FC = () => {
  return (
    <li style={{ display: "flex", marginLeft: "-16rem", marginTop: "-2.6rem" }}>
      <p style={{ fontSize: "1rem", fontWeight: "700", color: "#fff" }}>
        Tìm hiểu Thêm
      </p>
      <ol style={{ marginTop: "1rem", marginLeft: "-6rem" }}>
        <LiTagSample
          href="https://starbucks.vn/ca-phe/learn/dong-san-pham-ca-phe-rang/"
          detail="Dòng sản phẩm Cà phê Rang Starbucks"
          styleMarginTop=""
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/learn/nhung-huong-vi-trong-coc-ca-phe-cua-ban/"
          detail="Những hương vị trong Cốc cà phê của bạn"
          styleMarginTop="-1.08rem"
        />
        <LiTagSample
          href="https://starbucks.vn/ca-phe/learn/cau-hoi-thuong-gap-ve-ca-phe/"
          detail="Câu hỏi Thường Gặp về Cà phê"
          styleMarginTop="-1.3rem"
        />
      </ol>
    </li>
  );
};

interface HTMLLiTag {
  href: string;
  detail: string;
  styleMarginTop?: string;
}

export const LiTagSample: React.FC<HTMLLiTag> = ({
  href,
  detail,
  styleMarginTop,
}) => {
  const [isHoveredLink, setIsHoveredLink] = useState(false);
  return (
    <li style={{ marginTop: styleMarginTop }}>
      <a
        href={href}
        style={{
          color: "#fff",
          fontSize: "0.95rem",
          fontWeight: "400",
          backgroundColor: isHoveredLink ? "green" : "#000",
        }}
        onMouseEnter={() => {
          setIsHoveredLink(true);
        }}
        onMouseLeave={() => {
          setIsHoveredLink(false);
        }}
      >
        {detail}
      </a>
    </li>
  );
};

const Component2: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="region size1of5 menu_promo"
      style={{
        float: "right",
        marginTop: "-29.5rem",
        marginRight: "-1rem",
        backgroundColor: isHovered ? "green" : "#1e1e1e",
        width: "180px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="https://starbucks.vn/ca-phe/vang/" target="_self">
        <p>
          <img
            src="https://starbucks.vn/media/gapffx4c/blonde_roast_coffee_tcm89-15926.jpg"
            alt="Starbucks Rewards"
          />
        </p>
        <p></p>
        <p style={{ fontSize: "1.1rem", marginTop: "-2rem" }}>
          <strong>Blonde Roast</strong>
        </p>
        <p style={{ fontSize: "1rem", marginTop: "-2.2rem", width: "10rem" }}>
          Nhẹ và ngọt dịu, loại cà phê rang qua hoàn hảo.
        </p>
        <p></p>
      </a>
    </div>
  );
};
