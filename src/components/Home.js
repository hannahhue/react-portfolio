import React from "react";
import headerImg from "../images/cloudcode.webp";
import gitImg from "../images/gitimg.png";
import linkImg from "../images/linkinimg.png";

const styles = {
  img: {
    maxWidth: "700px",
  },
  imgClick: {
    maxWidth: "80px",
  },
};

export default function home() {
  return (
    //header img
    <div>
      <div className="row no-gutters" style={styles.img}>
        <div className="col-md-4">
          <img src={headerImg} className="card-img" alt="cloudcode" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Hannah Hughes</h1>
            <h2 className="card-title">Full Stack Dev</h2>
            <p className="card-text">
              Welcome to my portfolio! View all my work and learn a little bit
              more about me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
