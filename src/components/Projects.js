import React from "react"
import ProjectCard from "./ProjectCard"
// import ImgsUrl from "../ImgsUrl"

import { graphql, useStaticQuery } from "gatsby"

// const projectsDetails = [
//   {
//     Img: ImgsUrl.website1,
//     title: "css grid exapmle",
//     detail:
//       "this website example is build with CSS Grid and that was training for me on css grid and how to use it in design websites.",
//     live: "https://cosmo-junkie.netlify.app/",
//     git: "https://github.com/deviengeorge/Cosmo-Junkie",
//   },
//   {
//     Img: ImgsUrl.boilerplate,
//     title: "BoilerPlate Graphql, Apollo, React",
//     detail:
//       "This BoilerPlate for those how want to build React Apps with GraphQL, Apollo without worry about packages that need to be installed.",
//     live: null,
//     git: "https://github.com/deviengeorge/BoilerPlate-GraphQl-Apollo-React",
//   },
//   {
//     Img: ImgsUrl.website2,
//     title: "React Advice App",
//     detail:
//       "this website is fetching random advice from online API and display it.",
//     live: "https://advice-app-devien-george.netlify.app/",
//     git: "https://github.com/deviengeorge/Advice-React-App",
//   },
//   {
//     Img: ImgsUrl.website5,
//     title: "CSS Grid Example",
//     detail:
//       "this website example on Css Grid to create titles or windows on webpage",
//     live: "https://css-grid-titles-example.netlify.app/",
//     git: "https://github.com/deviengeorge/mutliple-titles",
//   },
//   {
//     Img: ImgsUrl.website4,
//     title: "React Movie IMDB",
//     detail:
//       "This website is for searching for movie on IMDB API that fetched with Axios and displayed information on the website like rating, name, details and so on.",
//     live: "https://react-movie-db-devien-george.netlify.app/",
//     git: "https://github.com/deviengeorge/react-movie-db",
//   },
//   {
//     Img: ImgsUrl.website6,
//     title: "React Weather App",
//     detail:
//       "This website is for searching for weather on Openweathermap API that fetched with fetch function and displayed information on the website.",
//     live: "https://weather-ract-app-devien-george.netlify.app/",
//     git: "https://github.com/deviengeorge/weather-react-app",
//   },
//   {
//     Img: ImgsUrl.website7,
//     title: "COVID-19 Tracker",
//     detail:
//       "This website is for display Deaths, Recovered, Infected with COVID-19 and the website get the information with API covid19.mathdro.id and return it to the tracker to display in chart.",
//     live: "https://covid-19-react-app-devien.netlify.app/",
//     git: "https://github.com/deviengeorge/COVID-19-Tracker-React",
//   },
//   {
//     Img: ImgsUrl.website8,
//     title: "Weather react app v2",
//     detail:
//       "This website to show temperature, humidity, pressure for every city you type and the app build with react Hooks and Context API not as app V1 that used Class component",
//     live: "https://weather-react-v2-devien.netlify.app/",
//     git: "https://github.com/deviengeorge/weather-app-v2",
//   },
// ];

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
                fluid {
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
            const imageData = project.image.childImageSharp.fluid.srcWebp
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
