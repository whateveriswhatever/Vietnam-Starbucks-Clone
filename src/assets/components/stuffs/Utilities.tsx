const Utilities = () => {
  return (
    <div className="utilities">
      <ul className="utilities_list">
        <li className="utility_link store_locator">
          <a href="/store/locator" title="Find store">
            <img
              src="https://starbucks.vn/assets/images/map%20marker.svg"
              className="location-marker"
              alt=""
            />
            <span
              className="hidden_visually med_render_visually"
              style={{ color: "#000" }}
            >
              Tìm Cửa hàng
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Utilities;
