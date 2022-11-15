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
        <a href="https://github.com/hannahhue">
          <img src={gitImg} style={styles.imgClick} />
        </a>
        <a href="https://www.linkedin.com/in/hannah-hughes-585bba1b2/">
          <img src={linkImg} style={styles.imgClick} />
        </a>
      </div>
    </div>
  );
}
