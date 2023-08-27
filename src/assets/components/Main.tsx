// import React from "react";
import ContentStripeContainer from "./stuffs/ContentStripeContainer";
import ContentStripeContainer1 from "./stuffs/ContentStripeContainer1";

const Main = () => {
  return (
    <main className="main" id="main">
      <div typeof="Region" resource="Main">
        {/* COMPONENT: HERO */}

        {/* DONE COMPONENT: HERO */}
        <article className="heroBanner hero75123">
          <div className="heroImage">
            {/* <img src="https://starbucks.vn/media/1vuphzru/hero-banner-desktop-bp.jpg" /> */}
            <span className="hidden_visually"></span>
          </div>
          <Container />
        </article>
        <ContentStripeContainer />
        <ContentStripeContainer1 />
      </div>
    </main>
  );
};

export default Main;

const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="fields">
        <div className="region size12of12">
          <div className="hero_overlay">
            <div className="hero_copy"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
