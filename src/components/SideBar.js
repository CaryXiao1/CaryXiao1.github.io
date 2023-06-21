import React from 'react'
import SideButton from './SideButton'
import { useState } from 'react'

const SideBar = (innerWidth) => {
  const [menu, setMenu] = useState(false)
  

  const goToTop = () => {
    document.getElementById("0").scrollIntoView({ behavior: "smooth" });
  }

  const toggleMenu = (value) => {
    if (value) {
      document.getElementById("side-bar").style.marginLeft = 0;
      setMenu(true)
    }
    else {
      document.getElementById("side-bar").style = "-150px";
      setMenu(false)
    }
  }

  return (
    <div id="side-bar">
        <div id="side-main">
          <button id="side-logo" onClick={goToTop}>
            cary xiao
          </button>
          <div className="group">
            <SideButton text="projects" section={true} idScroll="1" />
            <SideButton text="Workout App" section={false} idScroll="2" />
            <SideButton text="Patient-GAT" section={false} idScroll="3" />
            <SideButton
              text="ML Filters for FSOC"
              section={false}
              idScroll="4"
            />
            <SideButton text="MADSA" section={false} idScroll="5" />
          </div>

          <div className="group">
            <SideButton text="experience" section={true} idScroll="6" />
            <SideButton
              text="CS 198 Course Instructor"
              section={false}
              idScroll="7"
            />
            <SideButton
              text="NSF REU Researcher, IUPUI"
              section={false}
              idScroll="8"
            />
            <SideButton
              text="DIVE Research Assistant"
              section={false}
              idScroll="9"
            />
            <SideButton
              text="Course Instructor, AIMS"
              section={false}
              idScroll="10"
            />
          </div>
          <div className="group">
            <SideButton text="helpful links" section={true} idScroll="11" />
            <SideButton text="Resume" section={false} idScroll="12" />
            <SideButton text="Publications" section={false} idScroll="13" />
          </div>
        </div>
        <div id="side-arrow">
          {!menu && <button id="arrow-out" className="no-btn" onClick={() => toggleMenu(true)}>
            <i className="fa-solid fa-angle-right icon fa-2x"></i>
          </button>}
          {menu && <button id="arrow-in" className="no-btn" onClick={() => toggleMenu(false)}>
            <i className="fa-solid fa-angle-left icon fa-2x"></i>
          </button>}
        </div>
    </div>
  )
}

export default SideBar