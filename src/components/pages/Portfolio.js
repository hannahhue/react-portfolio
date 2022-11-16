import React from "react";
import learnMyWayImg from "../../images/learn-myway.png";
import getaJobImg from "../../images/getajob.PNG";
import emTrackImg from "../../images/em-track.png";
import insomniaImg from "../../images/insomnia.PNG";
import teamGenImg from "../../images/tem-gen.png";
import codeImg from "../../images/codequiz.png";

const styles = {
  projectImg: {
    maxWidth: "500px",
    maxHight: "300px",
  },
};

export default function portfolio() {
  return (
    <div>
      {/*  */}
      <div className="card bg-dark text-white" style={styles.projectImg}>
        <img src={getaJobImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Get A Job</h5>
          <p className="card-text">
            Team built Project, using express network and find a job!
          </p>
          <a
            href="https://github.com/ramosw1993/Get-A-Job"
            className="btn btn-primary"
          >
            View Github
          </a>
          <a
            href="https://get-a-job.herokuapp.com/"
            className="btn btn-primary"
          >
            View Site
          </a>
        </div>
      </div>

      {/*  */}
      <div className="card bg-dark text-white" style={styles.projectImg}>
        <img src={learnMyWayImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Learn My Way</h5>
          <p className="card-text">
            Team built Project, using third party API's to create an application
            that can teach you about anything!
          </p>
          <a
            href="https://github.com/abedhasan79/Learning-My-Way"
            className="btn btn-primary"
          >
            View Github
          </a>
          <a
            href="https://abedhasan79.github.io/Learning-My-Way/"
            className="btn btn-primary"
          >
            View Site
          </a>
        </div>
      </div>

      {/*  */}
      <div className="card bg-dark text-white" style={styles.projectImg}>
        <img src={emTrackImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Employee Tracker</h5>
          <p className="card-text">
            Keep track of employees and Update them through your terminal!
          </p>
          <a
            href="https://github.com/hannahhue/employee-tracker"
            className="btn btn-primary"
          >
            View Github
          </a>
        </div>
      </div>

      {/*  */}
      <div className="card bg-dark text-white" style={styles.projectImg}>
        <img src={insomniaImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">E-Commerce</h5>
          <p className="card-text">Mock of a real E-commerce Back end</p>
          <a
            href="https://github.com/hannahhue/E-Commerce-Back-End"
            className="btn btn-primary"
          >
            View Github
          </a>
        </div>
      </div>

      {/*  */}
      <div className="card bg-dark text-white" style={styles.projectImg}>
        <img src={teamGenImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Team Generator</h5>
          <p className="card-text">
            Answer the terminal propts and create a HTML file that will produce
            a team lineup!
          </p>
          <a
            href="https://github.com/hannahhue/team-generator"
            className="btn btn-primary"
          >
            View Github
          </a>
        </div>
      </div>

      {/*  */}
      <div className="card bg-dark text-white" style={styles.projectImg}>
        <img src={codeImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Code Quiz</h5>
          <p className="card-text">
            Test your skills with a timed quiz all about coding!
          </p>
          <a
            href="https://github.com/hannahhue/code-quiz"
            className="btn btn-primary"
          >
            View Github
          </a>
          <a
            href="https://hannahhue.github.io/code-quiz/"
            className="btn btn-primary"
          >
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}
