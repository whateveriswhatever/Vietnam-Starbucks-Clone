const ContentStripeContainer: React.FC = () => {
  return (
    <div className="containStripeContainer">
      <article className="homecontentStripe-1 containStripe contentStripe18808 contentstripe-light-theme contentStripe--imRight">
        <div
          className="contentStripe_container"
          style={{ paddingTop: "70px", paddingBottom: "70px" }}
        >
          <div className="contentStripe_grid">
            <figure className="contentStripe_media">
              <a href="/thuc-don/thuc-uong/" title="Hay thuong thuc ngay">
                <picture className="contentStripe_picture">
                  <img src="https://starbucks.vn/media/s5hlhw2z/our-espresso_tcm89-24616_w1024_n.png" />
                </picture>
              </a>
            </figure>
            <ContentStripeContentofContainer1 />
          </div>
        </div>
      </article>
    </div>
  );
};

export default ContentStripeContainer;

const ContentStripeContentofContainer1: React.FC = () => {
  return (
    <div className="contentStripe__content">
      <h2
        className="contentStripe_title"
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          fontStyle: "italic",
          color: "#000",
        }}
      >
        Cà phê Espresso của chúng tôi, Latte
        <br />
        của bạn
      </h2>
      <div
        className="contentStripe_body"
        style={{
          position: "relative",
          display: "block",
          marginLeft: "-46rem",
          marginRight: "-16.5rem",
          marginTop: "-2.5rem",
        }}
      >
        <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
          Cà phê espresso đậm vị và bốc hơi sữa - ngon tuyệt hảo
          <br />
          khi thưởng thức riêng hay khi thêm đường.
        </p>
      </div>
      <a
        className="contentStripe_cta contentStripe-light-theme"
        href="/thuc-don/thuc-uong"
        title="Hãy thưởng thức ngay"
        style={{
          position: "relative",
          display: "block",
          marginLeft: "-46rem",
          marginRight: "-16.5rem",
          marginTop: "-0.5rem",
          color: "#000",
          borderBottom: "1.5px dotted !important",
        }}
      >
        Hãy thưởng thức ngay
      </a>
    </div>
  );
};
