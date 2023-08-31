// import React from "react";
import { LiTagSample } from "./Coffe";
import { useState } from "react";

const Responsibility: React.FC = () => {
  return (
    <div className="fields" id="menu_3">
      <Component1 />
      <Component2 />
    </div>
  );
};

export default Responsibility;

const Component1: React.FC = () => {
  return (
    <div
      className="region size4of5 menu_content"
      style={{
        backgroundColor: "#1e1e1e",
        marginTop: "5.8rem",
        width: "100wh",
      }}
    >
      <ol
        className="blocks blocks-four-up"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 0.3fr)" }}
      >
        <Li1 />
        <Li2 />

        {/* <p className="menu_suggestion_title" style={{ width: "25rem" }}>
          Bạn đang tìm kiếm Thông tin về Starbucks?
        </p> */}
        {/* <br /> */}
        {/* <ul
          className="menu_suggestion_links"
          style={{ display: "flex", marginTop: "-1rem" }}
        >
          <li
            className="navGroup_menu_sugList_item"
            style={{ fontSize: "1rem" }}
          >
            Giới thiệu về Chúng tôi
          </li>
          <li
            className="navGroup_menu_sugList_item"
            style={{ marginLeft: "0.7rem", fontSize: "1rem" }}
          >
            {" "}
            Cà phê{" "}
          </li>
        </ul> */}
      </ol>
      <p
        className="menu_suggestion_title"
        style={{ color: "#e6e8e8", clear: "both", fontSize: "1.4rem" }}
      >
        Bạn đang tìm kiếm Thông tin về Starbucks?
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
      style={{ backgroundColor: isHovered ? "green" : "#1e1e1e" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="anchor"
        style={{
          marginLeft: "66rem",
          marginTop: "-24.5rem",
          // backgroundColor: isHovered ? "green" : "#1e1e1e",
        }}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <p>
          <img
            src="https://starbucks.vn/media/ksrinkwr/responsibility-upsell-promo-image_tcm89-23593.jpg"
            alt="Starbucks Rewards"
          />
        </p>
        <p></p>
        <p
          style={{
            fontSize: "1rem",
            width: "10rem",
            marginTop: "-2rem",
            lineHeight: "1rem",
          }}
        >
          <strong>Sự tham gia của Cộng đồng</strong>
        </p>
        <p
          style={{ fontSize: "0.9rem", width: "8.8rem", marginTop: "-1.7rem" }}
        >
          Chúng tôi khuyến khích cộng sự (nhân viên) cũng như khách hàng tham
          gia cộng đồng của họ.
        </p>
        <p></p>
      </div>
    </div>
  );
};

const Li1: React.FC = () => {
  const [isHoveredLink, setIsHoveredLink] = useState(false);
  return (
    <li>
      <p style={{ marginTop: "-1rem" }}>
        <a
          href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/"
          style={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "700",
            backgroundColor: isHoveredLink ? "green" : "#000",
          }}
          onMouseEnter={() => {
            setIsHoveredLink(true);
          }}
          onMouseLeave={() => {
            setIsHoveredLink(false);
          }}
        >
          Tìm nguồn Cung ứng có Đạo đức
        </a>
      </p>
      <ol style={{ marginTop: "-0.8rem" }}>
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/ho-tro-nong-dan/"
          detail="Hỗ trợ Nông dân"
          styleMarginTop="-1rem"
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/tim-nguon-cung-ung-ca-phe/"
          detail="Tìm nguồn Cung ứng Cà phê"
          styleMarginTop="-1.2rem"
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/tim-nguon-cung-ung-tra/"
          detail="Tìm nguồn Cung ứng Trà"
          styleMarginTop="-1rem"
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/tim-nguon-cung-ung-co-dao-duc/tim-nguon-cung-ung-ca-cao/"
          detail="Tìm nguồn Cung ứng Ca cao"
          styleMarginTop="-1rem"
        />
      </ol>
    </li>
  );
};

const Li2: React.FC = () => {
  const [isHoveredLink, setIsHoveredLink] = useState(false);
  return (
    <li style={{ marginTop: "-1rem" }}>
      <p>
        <a
          href="https://starbucks.vn/trach-nhiem/moi-truong/"
          style={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "700",
            backgroundColor: isHoveredLink ? "green" : "#000",
          }}
          onMouseEnter={() => {
            setIsHoveredLink(true);
          }}
          onMouseLeave={() => {
            setIsHoveredLink(false);
          }}
        >
          Môi trường
        </a>
      </p>
      <ol style={{ marginTop: "-1rem" }}>
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/moi-truong/tai-che/"
          detail="Tái chế"
          styleMarginTop=""
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/moi-truong/nang-luong/"
          detail="Năng lượng"
          styleMarginTop="-1.2rem"
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/moi-truong/nuoc/"
          detail="Nước"
          styleMarginTop="-0.8rem"
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/moi-truong/cong-trinh-xanh/"
          detail="Công trình Xanh"
          styleMarginTop="-0.9rem"
        />
        <LiTagSample
          href="https://starbucks.vn/trach-nhiem/moi-truong/bien-doi-khi-hau/"
          detail="Biến đổi Khí hậu"
          styleMarginTop="-1rem"
        />
      </ol>
    </li>
  );
};

const SuggestedLink: React.FC = () => {
  return (
    <ul
      className="menu_suggestion_links"
      style={{ display: "flex", marginTop: "-0.6rem" }}
    >
      <li
        className="navGroup_menu_sugList_item"
        style={{ fontSize: "1rem", marginLeft: "1rem" }}
      >
        Giới thiệu về Chúng tôi
      </li>
      <li
        className="navGroup_menu_sugList_item"
        style={{ marginLeft: "0.7rem", fontSize: "1rem" }}
      >
        {" "}
        Cà phê{" "}
      </li>
    </ul>
  );
};
