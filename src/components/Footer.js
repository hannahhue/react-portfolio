import React from "react";
import gitImg from "../images/gitimg.png";
import linkImg from "../images/linkinimg.png";
import stackImg from "../images/stack.png";

const styles = {
  imgClick: {
    maxWidth: "80px",
    paddingLeft: "30px",
  },
};

export default function footer() {
  return (
    <div>
      <div className="footer">
        <a href="https://github.com/hannahhue">
          <img className="imgClick" src={gitImg} style={styles.imgClick} />
        </a>
        <a href="https://www.linkedin.com/in/hannah-hughes-585bba1b2/">
          <img className="imgClick" src={linkImg} style={styles.imgClick} />
        </a>
        <a href="https://stackoverflow.com/users/20514409/hannah-hughes">
          <img className="imgClick" src={stackImg} style={styles.imgClick} />
        </a>
      </div>
    </div>
  );
}
