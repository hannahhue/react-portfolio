import React from "react";
import learnMyWayImg from "../images/learn-myway.png";
import getaJobImg from "../images/getajob.PNG";
import emTrackImg from "../images/em-track.png";
import insomniaImg from "../images/insomnia.PNG";
import teamGenImg from "../images/tem-gen.png";

const styles = {
  projectImg: {
    maxWidth: "400px",
  },
};

export default function portfolio() {
  return (
    <div>
      {/*  */}
      <div class="card bg-dark text-white" style={styles.projectImg}>
        <img src={getaJobImg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Get A Job</h5>
          <p class="card-text">
            Team built Project, using express network and find a job!
          </p>
          <a
            href="https://github.com/ramosw1993/Get-A-Job"
            class="btn btn-primary"
          >
            View Github
          </a>
          <a href="https://get-a-job.herokuapp.com/" class="btn btn-primary">
            View Site
          </a>
        </div>
      </div>

      {/*  */}
      <div class="card bg-dark text-white" style={styles.projectImg}>
        <img src={learnMyWayImg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Learn My Way</h5>
          <p class="card-text">
            Team built Project, using third party API's to create an application
            that can teach you about anything!
          </p>
          <a
            href="https://github.com/abedhasan79/Learning-My-Way"
            class="btn btn-primary"
          >
            View Github
          </a>
          <a
            href="https://abedhasan79.github.io/Learning-My-Way/"
            class="btn btn-primary"
          >
            View Site
          </a>
        </div>
      </div>

      {/*  */}
      <div class="card bg-dark text-white" style={styles.projectImg}>
        <img src={emTrackImg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

      {/*  */}
      <div class="card bg-dark text-white" style={styles.projectImg}>
        <img src={insomniaImg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">E-Commerce</h5>
          <p class="card-text">Mock of a real E-commerce Back end</p>
          <a
            href="https://github.com/hannahhue/E-Commerce-Back-End"
            class="btn btn-primary"
          >
            View Github
          </a>
        </div>
      </div>

      {/*  */}
      <div class="card bg-dark text-white" style={styles.projectImg}>
        <img src={teamGenImg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Team Generator</h5>
          <p class="card-text">
            Answer the terminal propts and create a HTML file that will produce
            a team lineup!
          </p>
          <a
            href="https://github.com/hannahhue/team-generator"
            class="btn btn-primary"
          >
            View Github
          </a>
        </div>
      </div>
    </div>
  );
}
