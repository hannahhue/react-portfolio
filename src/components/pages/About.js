import React from "react";
import pfpImg from "../../images/pfppp.jpg";
import awardImg from "../../images/awardd.png";

export default function About() {
  return (
    <div className="about d-flex justify-content-center">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={pfpImg} className="pfp card-img" alt="pfp" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Hannah Hughes</h1>
            <h2 className="card-title">Full Stack Dev</h2>
            <p class="card-text">
              Helloo! I am 21 and currently a student within the UOT Full Stack
              Dev bootcamp and an aspiring web developer.
            </p>
            <p className="card-text">
              Love the process of coding and seeing the outcome, certified
              problem solver!
            </p>
            <p class="card-text">Located in Windsor, ON, Canada.</p>
          </div>
        </div>
      </div>

      <div className="acc row no-gutters">
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
