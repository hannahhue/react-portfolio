import React from "react";
import headerImg from "../../images/cloudcode1.jpg";

const styles = {
  img: {
    maxWidth: "1000px",
  },
  imgClick: {
    maxWidth: "80px",
  },
};

export default function Home() {
  return (
    //header img
    <div className="d-flex justify-content-center">
      <div className="row no-gutters" style={styles.img}>
        <div className="col-md-4">
          <img src={headerImg} className="card-img" alt="cloudcode" />
        </div>
        {/* text info */}
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Hannah Hughes</h1>
            <h2 className="card-title">Full Stack Dev</h2>
            <p className="card-text">Welcome to my portfolio!</p>
            <p className="card-text">
              View all my work and learn a little bit more about me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
