import React from "react";
import pfpImg from "../../images/pfppp.jpg";
import awardImg from "../../images/awardd.png";

const styles = {
  img: {
    maxWidth: "700px",
  },
};

export default function About() {
  return (
    <div>
      <div className="row no-gutters" style={styles.img}>
        <div className="col-md-4">
          <img src={pfpImg} className="card-img" alt="pfp" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Hannah Hughes</h1>
            <h2 className="card-title">Full Stack Dev</h2>
            <p class="card-text">
              Helloo! I am 21 and currently a student within the UOT Full Stack
              Dev bootcamp and an aspiring web developer.
            </p>
            <p class="card-text">Located in Windsor, ON, Canada.</p>
          </div>
        </div>
      </div>

      <div className="row no-gutters" style={styles.img}>
        <div className="col-md-4">
          <img src={awardImg} className="card-img" alt="award" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Accomplishments</h1>
            <p className="card-text">UOT Bootcamp Certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
