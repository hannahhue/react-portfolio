import React from "react";
import headerImg from "../../images/cloudcode1.jpg";
import pfpImg from "../../images/port-img.jpg";

export default function Home() {
  return (
    //header img
    <div>
      <div className="d-flex justify-content-center">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={headerImg} className="card-img home" alt="cloudcode" />
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
      <div className="row no-gutters">
        <div className="about">
          <img src={pfpImg} className="card-img pfp" alt="pfp" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title about">About Me</h2>
            <p className="card-text about">
              Helloo! I am 21 and currently a student within the UOT Full Stack
              Dev bootcamp and an aspiring web developer, and I Love the process of
              coding and seeing the outcome!
            </p>
            <p className="card-text about">Located in Windsor, ON, Canada.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
