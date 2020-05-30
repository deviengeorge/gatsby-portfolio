import React from "react"

const skills = [
  "Html / Html5",
  "Css / Css3",
  "Css Grid",
  "Css Variables",
  "BEMcss Methodology",
  "Javascript",
  "JQuery",
  "Sass / Scss",
  "Bootstrap",
  "Semantic UI",
  "Materialize Css",
  "Font Awesome",
  "Chart Js",
  "React",
  "Axios",
  "React Hooks",
  "React Router",
  "React Redux",
  "GraphQL",
  "Apollo",
  "Git",
  "GitHub",
  "Npm / Yarn",
  "Gulp",
  "Pugjs",
]

function Skills() {
  return (
    <div id="skills" name="Skills">
      <div className="container">
        <h2 className="heading">Skills</h2>
        <div className="row">
          <div className="col-md-12">
            <ul>
              {/* function to render every skill in skills array to the Dom  */}
              {skills.map(skill => {
                return <li key={skill}>{skill}</li>
              })}
              {/* end of function */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
