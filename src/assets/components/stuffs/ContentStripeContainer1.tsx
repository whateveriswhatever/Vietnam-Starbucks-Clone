const ContentStripeContainer1 = () => {
  return (
    <div className="contentStripeContainer">
      <article className="homeContentStripe-2 contentStripe contentStripe18808 contentStripe-light-theme contentStripe--imgLeft">
        <div className="contentStripe_container">
          <div className="contentStripe_grid">
            <figure className="contentStripe_media">
              <a
                href="/ve-chung-toi/co-hoi-nghe-nghiep"
                title="Tham gia cùng chúng tôi"
              >
                <picture className="contentStripe_picture">
                  <img
                    className="contentStripe_img"
                    src="https://starbucks.vn/media/2rbbcpzs/opportunity_tcm89-24617_w1024_n.png"
                    alt="Opportunity Tcm89 24617 W1024 N"
                    data-aspect="0"
                    style={{ marginLeft: "14rem", marginTop: "5.5rem" }}
                  />
                </picture>
              </a>
            </figure>
            <ContentStripeContent1 />
          </div>
        </div>
      </article>
    </div>
  );
};

export default ContentStripeContainer1;

const ContentStripeContent1: React.FC = () => {
  return (
    <div className="contentStripe__content">
      <h2
        className=""
        style={{
          fontWeight: "700",
          textTransform: "uppercase",
          wordSpacing: "1px",
          position: "relative",
          display: "block",
          marginLeft: "58rem",
          marginTop: "-15.5rem",
        }}
      >
        CƠ HỘI
      </h2>
      <div
        className="contentStripe_body"
        style={{
          wordSpacing: "1px",
          position: "relative",
          display: "block",
          marginLeft: "58rem",
          marginTop: "-2.5rem",
          fontWeight: "bold",
        }}
      >
        <p
          style={{ fontWeight: "bold", fontStyle: "italic", color: "#3d3a35" }}
        >
          Không chỉ là nhân viên, mà còn là cộng sự.
        </p>
        <a
          style={{ color: "#000", borderBottom: "1.5px dotted !important" }}
          className="contentStripe_cta contentStripe_light-theme"
          href="https://starbucks.vn/ve-chung-toi/co-hoi-nghe-nghiep/"
        >
          Tham gia cùng chúng tôi
        </a>
      </div>
    </div>
  );
};
