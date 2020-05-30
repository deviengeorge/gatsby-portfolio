import React from "react"
import ProjectCard from "./ProjectCard"

import { graphql, useStaticQuery } from "gatsby"

function Projects() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            live
            git
            skills
            image {
              childImageSharp {
                fixed {
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges
  return (
    <div id="projects" className="background-alt" name="Projects">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row row-grid">
          {/* Function to render and map through every project that type in constant projectDetails  */}

          {projects.map(({ node: project }) => {
            const title = project.title
            const description = project.description
            const imageData = project.image.childImageSharp.fixed.srcWebp
            const live = project.live
            const git = project.git
            const skills = project.skills
            return (
              <ProjectCard
                key={title}
                name={title}
                details={description}
                backgroundImg={imageData}
                livelink={live}
                gitlink={git}
                skillsBadge={skills}
              />
            )
          })}

          {/* <ProjectCard
            backgroundImg={ImgsUrl.website1}
            name='Weather React App'
            details='this website is build with gulp and react js with react router and redux and webpack'
            livelink='https://netlify.com'
            gitlink='https://github/deviengeorge'
          />
          <ProjectCard
            backgroundImg={ImgsUrl.website2}
            name='COVID-19 React App'
            details='this website is build with gulp and react js with react router and redux and webpack'
            livelink='https://cosmo-junkie.netlify.app/'
            gitlink='https://github/deviengeorge'
          />
          <ProjectCard
            backgroundImg={ImgsUrl.website3}
            name='Practise React Bootstrap'
            details='this website is build with Bootstrap and react js with react router'
            livelink='https://practise-reaact-bootstrap-devien-george.netlify.app/'
            gitlink='https://github/deviengeorge'
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
