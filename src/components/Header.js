import React, { Fragment, useState } from "react"
import { scroller } from "react-scroll"

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <Fragment>
      <div
        id="mobile-menu-open"
        className={`shadow-large`}
        onClick={() => setMobileMenu(true)}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <header className={`${mobileMenu ? "active" : ""}`}>
        <div id="mobile-menu-close" onClick={() => setMobileMenu(false)}>
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          <li>
            <a
              href="#"
              onClick={() => {
                scroller.scrollTo("Aboout", {
                  duration: 1500,
                  delay: 100,
                  smooth: "linear",
                })
                setMobileMenu(false)
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                scroller.scrollTo("Skills", {
                  duration: 1500,
                  delay: 100,
                  smooth: "linear",
                })
                setMobileMenu(false)
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                scroller.scrollTo("Projects", {
                  duration: 1500,
                  delay: 100,
                  smooth: "linear",
                })
                setMobileMenu(false)
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                scroller.scrollTo("Education", {
                  duration: 1500,
                  delay: 100,
                  smooth: "linear",
                })
                setMobileMenu(false)
              }}
            >
              Education
            </a>
          </li>
        </ul>
      </header>
    </Fragment>
  )
}

export default Header
