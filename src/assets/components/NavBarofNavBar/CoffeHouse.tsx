// import React from "react";
import { LiTagSample } from "./Coffe";
import { useState } from "react";

interface ILiTagSampleForCoffeHouse {
  href: string;
  detail: string;
  styleMarginTop?: string;
}

const LiTagSampleForCoffeHouse: React.FC<ILiTagSampleForCoffeHouse> = ({
  href,
  detail,
  styleMarginTop,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      style={{
        marginTop: styleMarginTop,
        // backgroundColor: isHovered ? "green" : "#1e1e1e",
      }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <p
      // style={{ backgroundColor: isHovered ? "green" : "#1e1e1e" }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href={href}
          style={{
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: "400",
            backgroundColor: isHovered ? "green" : "#1e1e1e",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {detail}
        </a>
      </p>
    </li>
  );
};

const CoffeHouse = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="fields" id="menu_2">
      <div className="region size4of5 menu_content">
        <ol
          className="blocks blocks-four-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 0.2fr)",
            marginLeft: "-0.3rem",
          }}
        >
          <LiTagSampleForCoffeHouse
            href="https://starbucks.vn/quan-ca-phe/chuong-trinh-chuyen-gia-ca-phe/"
            detail="Chương trình Chuyên gia cà phê"
            styleMarginTop="-1rem"
          />
          <LiTagSampleForCoffeHouse
            href="https://starbucks.vn/quan-ca-phe/cong-dong-truc-tuyen/"
            detail="Cộng đồng Trực tuyến"
            styleMarginTop="-1rem"
          />
          <LiTagSampleForCoffeHouse
            href="https://starbucks.vn/quan-ca-phe/thiet-ke-cua-hang/"
            detail="Thiết kế Cửa hàng"
            styleMarginTop="-0.8rem"
          />
          <li style={{ marginTop: "-1rem" }}>
            <p
            // style={{ backgroundColor: isHovered ? "green" : "#1e1e1e" }}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://starbucks.vn/quan-ca-phe/thuong-mai/"
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: "400",
                  backgroundColor: isHovered ? "green" : "#1e1e1e",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Sản phẩm
              </a>
            </p>
            <ol>
              <LiTagSample
                href="https://starbucks.vn/quan-ca-phe/thuong-mai/drinkware/"
                detail="Dụng cụ uống"
                styleMarginTop="-1.2rem"
              />
              <LiTagSample
                href="https://starbucks.vn/quan-ca-phe/thuong-mai/machines/"
                detail="Dụng cụ pha chế"
                styleMarginTop="-1.2rem"
              />
              <LiTagSample
                href="https://starbucks.vn/quan-ca-phe/thuong-mai/accessories/"
                detail="Phụ kiện"
                styleMarginTop="-1.15rem"
              />
            </ol>
          </li>
        </ol>
        <p
          className="menu_suggestion_title"
          style={{ color: "#e6e8e8", clear: "both", fontSize: "1.4rem" }}
        >
          Bạn đang tìm kiếm Điều gì Khác?
        </p>
        <SuggestionLinks />
        {/* <LinkDirection /> */}
      </div>
      <LinkDirection />
    </div>
  );
};

export default CoffeHouse;

const SuggestionLinks: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ul className="menu_suggestion_link" style={{ display: "inline-flex" }}>
      <li className="navGroup_menu_sugList_item">
        <a
          className="link"
          href="https://starbucks.vn/thuc-don/thuc-uong/"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            marginLeft: "1rem",
            marginTop: "-5rem",
            backgroundColor: isHovered ? "green" : "#000",
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Thức uống
        </a>
      </li>
      <li
        className="navGroup_menu_sugList_item"
        style={{
          color: "#fff",
          fontWeight: "700",
          fontSize: "1rem",
          marginTop: "0.4rem",
          marginLeft: "1.5rem",
        }}
      >
        Giới thiệu về Chúng tôi
      </li>
      {/* <LinkDirection /> */}
    </ul>
  );
};

const LinkDirection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="region size1of5 menu_promo"
      style={{
        float: "right",
        marginRight: "-2rem",
        marginTop: "-21rem",
        backgroundColor: isHovered ? "green" : "#1e1e1e",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="https://starbucks.vn/quan-ca-phe/" target="_self">
        <p>
          <img
            src="https://starbucks.vn/media/hagf4003/coffeehouse-teaser_tcm89-3864.jpg"
            alt="Starbucks Rewards"
          />
        </p>
        <p></p>
        <p
          style={{ marginTop: "-1.7rem", lineHeight: "0.8rem", width: "150px" }}
        >
          <strong style={{ fontWeight: "700", fontSize: "1rem" }}>
            Cà phê của chúng tôi đưa mọi người lại gần nhau
          </strong>
        </p>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "-1.6rem",
            width: "150px",
            lineHeight: "0.9rem",
          }}
        >
          Vui chơi, mơ giấc mơ lớn và kết nối với bạn bè.
        </p>
        <p></p>
      </a>
    </div>
  );
};
