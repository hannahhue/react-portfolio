import React from "react";
import resumeImg from "../images/resume.PNG";

const styles = {
  img: {
    maxWidth: "700px",
  },
};

export default function resume() {
  return (
    <div style={styles.img}>
      <a
        href="https://docs.google.com/document/d/10QxRcaCF4XN1ee-ewosbendNGBNQZgDD6SGR37eUp24/edit?usp=sharing"
        class="btn btn-primary"
      >
        See It On Google
      </a>
      <img src={resumeImg} />
    </div>
  );
}
