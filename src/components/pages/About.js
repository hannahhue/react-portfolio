import React from "react";
import pfpImg from "../../images/pfppp.jpg";
import mernImg from "../../images/mern.png";
import frontImg from "../../images/frontend.png";
import sqlImg from "../../images/mysql.png";

export default function About() {
  return (
    <div>
      <div className="row no-gutters">
        <div className="about">
          <img src={pfpImg} className="card-img pfp" alt="pfp" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title about">Hannah Hughes</h1>
            <h2 className="card-title about">Full Stack Dev</h2>
            <p class="card-text about">
              Helloo! I am 21 and currently a student within the UOT Full Stack
              Dev bootcamp and an aspiring web developer.
            </p>
            <p className="card-text about">
              Love the process of coding and seeing the outcome, certified
              problem solver!
            </p>
            <p class="card-text about">Located in Windsor, ON, Canada.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
