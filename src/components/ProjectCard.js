import React from "react"
import Img from "gatsby-image"

function ProjectCard({
  backgroundImg,
  name,
  details,
  livelink,
  gitlink,
  skillsBadge,
}) {
  console.log(backgroundImg)
  return (
    <div className="project shadow-large">
      <div className="project-image">
        <img
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
          alt=""
        />
      </div>
      <div className="project-info">
        <h3 className="text-capitalize">{name}</h3>
        <p>{details}</p>
        <div className="skills-badges">
          {skillsBadge.map(badge => {
            return <span className="badge badge-primary">{badge}</span>
          })}
          {/* <span className="badge badge-primary">Html</span>
          <span className="badge badge-primary">Css</span> */}
        </div>
        {/* if live Link property is null than live preview button will not return */}
        {livelink !== null ? (
          <a href={livelink} className="button">
            Live Preview
          </a>
        ) : null}
        <a href={gitlink} className="button">
          Github
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
