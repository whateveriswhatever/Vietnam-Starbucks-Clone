// import React from "react";
import { useState } from "react";
import { LiTagSample } from "./Coffe";
const Menu = () => {
  return (
    <li className="fields" id="menu_0">
      <div className="region size4of5 menu_content">
        <ol
          className="blocks blocks-four-up"
          style={{
            marginTop: "-1.1rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 0.2fr)",
          }}
        >
          <Li1 />
          <Li2 />
        </ol>
        <p
          className="menu_suggestion_title"
          style={{ color: "#e6e8e8", clear: "both", fontSize: "1.4rem" }}
        >
          Bạn đang tìm kiếm Cà phê để thưởng thức tại Nhà?
        </p>
        <ul
          className="navGroup_menu_sugList_item"
          style={{ marginTop: "-1rem" }}
        >
          <a
            className="link"
            href="https://starbucks.vn/ca-phe/learn/dong-san-pham-ca-phe-rang/"
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "1rem",
              marginLeft: "1rem",
            }}
          >
            Tìm hiểu về Dòng sản phẩm cà phê rang Starbucks Roast
          </a>
        </ul>
      </div>
      <LinkDirection />
    </li>
  );
};

export default Menu;

const Li1: React.FC = () => {
  return (
    <li>
      <p>
        <a
          href="https://starbucks.vn/thuc-don/thuc-an/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Thức ăn
        </a>
      </p>
      <ol style={{ marginTop: "-1.5rem" }}>
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-an/banh/"
          detail="Bánh"
          styleMarginTop=""
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-an/banh-muffin/"
          detail="Bánh Muffin"
          styleMarginTop="-1.2rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-an/banh-cookie/"
          detail="Bánh cookie"
          styleMarginTop="-1.2rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-an/banh-ngot/"
          detail="Bánh Ngọt"
          styleMarginTop="-1.2rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-an/banh-mi-sandwiches/"
          detail="Bánh mì sandwiches"
          styleMarginTop="-1.2rem"
        />
      </ol>
    </li>
  );
};

const Li2: React.FC = () => {
  return (
    <li>
      <p>
        <a
          href="https://starbucks.vn/thuc-don/thuc-uong/"
          style={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
        >
          Thức uống
        </a>
      </p>
      <ol>
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-uong/thuc-uong-espresso/"
          detail="Thức uống Espresso"
          styleMarginTop="-1.5rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-uong/thuc-uong-voi-socola/"
          detail="Thức uống với Sôcôla"
          styleMarginTop="-1.2rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-uong/ca-phe-xay-frappuccino/"
          detail="Cà phê Xay Frappuccino®"
          styleMarginTop="-1.3rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-uong/kem-tron-frappuccino/"
          detail="Kem Trộn Frappuccino®"
          styleMarginTop="-1.3rem"
        />
        <LiTagSample
          href="https://starbucks.vn/thuc-don/thuc-uong/tra-pha/"
          detail="Trà pha"
          styleMarginTop="-1rem"
        />
      </ol>
    </li>
  );
};

const LinkDirection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="region size1of5 menu_promo"
      style={{
        marginTop: "-21.5rem",
        marginLeft: "57rem",
        backgroundColor: isHovered ? "green" : "#1e1e1e",
        textAlign: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="https://starbucks.vn/thuc-don/thuc-an/" target="_self">
        <p>
          <img
            src="https://starbucks.vn/media/lwhnwlla/menu_blueberries_tcm89-16461.jpg"
            alt="Starbucks Rewards"
            style={{ float: "none", margin: "0", maxWidth: "100%" }}
          />
        </p>
        <p
          style={{
            marginBottom: "0.461538em",
            maxWidth: "270px",
            color: "#fff",
            fontWeight: "400",
            fontSize: "1.2rem",
            marginTop: "-1.8rem",
          }}
        >
          <strong style={{ lineHeight: "0.2rem", fontSize: "1.1rem" }}>
            Đồ ăn Thực thụ, Cực Ngon
          </strong>
        </p>
        <p
          style={{
            marginTop: "-1rem",
            lineHeight: "2rem",
            fontSize: "1rem",
            width: "18rem",
          }}
        >
          Xem những lựa chọn món ăn mới trong cửa hàng của chúng tôi.
        </p>
      </a>
    </div>
  );
};
