import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5 copyright'>
            <p>Copyright &copy; 2020 Devien George</p>
          </div>
          <div className='col-sm-2 top' onClick={() => scroll.scrollToTop()}>
            <span id='to-top'>
              <i className='fa fa-chevron-up' aria-hidden='true'></i>
            </span>
          </div>
          <div className='col-sm-5 social'>
            <ul>
              <li>
                <a href='https://github.com/deviengeorge' target='_blank'>
                  <i className='fa fa-github' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/' target='_blank'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/dodogeoge' target='_blank'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
