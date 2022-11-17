import React from "react";

export default function Portfolio(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="card" key={project.id}>
          <img src={project.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
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
