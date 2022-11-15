import React from "react";
import gitImg from "../images/gitimg.png";
import linkImg from "../images/linkinimg.png";

const styles = {
  imgClick: {
    maxWidth: "80px",
  },
};

export default function footer() {
  return (
    <div>
      <div className="footer">
        <a>
          <img src={gitImg} style={styles.imgClick} />
        </a>
        <a>
          <img src={linkImg} style={styles.imgClick} />
        </a>
      </div>
    </div>
  );
}
