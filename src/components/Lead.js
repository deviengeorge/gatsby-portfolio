import React, { Fragment } from "react"
import { scroller } from "react-scroll"

import Particles from "react-particles-js"

function Lead() {
  return (
    <Fragment>
      <div id="lead">
        <Particles
          params={{
            particles: {
              number: {
                value: 180,
                density: {
                  enable: true,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  speed: 2,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 7,
          }}
        />
        <div id="lead-content">
          <h1>Devien George</h1>
          <h2>Front End Developer</h2>
          <a
            href={`Devien_George_Resume.pdf`}
            download
            className="btn-rounded-white"
          >
            Download Resume
          </a>
        </div>

        <div id="lead-overlay"></div>

        <div id="lead-down">
          <span>
            <i
              className="fa fa-chevron-down"
              aria-hidden="true"
              onClick={() =>
                scroller.scrollTo("About", {
                  duration: 1500,
                  smooth: true,
                })
              }
            ></i>
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default Lead
