import React from "react";

const styles = {
  img: {
    maxWidth: "750px",
  },
};

export default function Portfolio(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="card" key={project.id}>
          <img
            src={project.img}
            className="card-img-top"
            alt="..."
            style={styles.img}
          />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text desc">{project.description}</p>
            <a href={project.git} className="btn btn-primary">
              View Github
            </a>
            {project.site ? (
              <a href={project.site} className="btn btn-primary">
                View Site
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
