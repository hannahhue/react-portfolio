import React from "react";
import resumeImg from "../../images/resume.PNG";
import resumeDownload from "../../textFiles/hannahResume.pdf";

const styles = {
  img: {
    maxWidth: "700px",
  },
};

export default function Resume() {
  return (
    <div className="resume" style={styles.img}>
      <a
        href="https://docs.google.com/document/d/10QxRcaCF4XN1ee-ewosbendNGBNQZgDD6SGR37eUp24/edit?usp=sharing"
        className="btn btn-primary"
      >
        See It On Google
      </a>
      <a
        href={resumeDownload}
        download="HannahHughesResume.pdf"
        className="btn btn-primary"
      >
        Download
      </a>
      <img src={resumeImg} className="resImg" />
    </div>
  );
}
