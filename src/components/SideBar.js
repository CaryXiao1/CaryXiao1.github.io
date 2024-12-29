import React from 'react'
import SideButton from './SideButton'
import { useState } from 'react'

const SideBar = (innerWidth) => {
  const [menu, setMenu] = useState(false)
  

  const goToTop = () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
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
            <SideButton text="projects" section={true} idScroll="projects" />
            <SideButton text="Lightsaber" section={false} idScroll="lightsaber" />
            <SideButton text="Image to ASCII" section={false} idScroll="cs231n" />
            <SideButton text="Workout App" section={false} idScroll="workout" />
            <SideButton text="Patient-GAT" section={false} idScroll="patient" />
            <SideButton
              text="ML Filters for FSOC"
              section={false}
              idScroll="fsoc"
            />
            <SideButton text="MADSA" section={false} idScroll="madsa" />
          </div>

          <div className="group">
            <SideButton text="experience" section={true} idScroll="experience" />
            <SideButton
              text="CS 111 Grad TA"
              section={false}
              idScroll="cs111"
            />
            <SideButton
              text="Yamaha SWE Intern"
              section={false}
              idScroll="yamaha"
            />
            <SideButton
              text="Oppia Dev Workflow Contributor"
              section={false}
              idScroll="oppia"
            />
            <SideButton
              text="CS 106B Undergrad TA"
              section={false}
              idScroll="cs198"
            />
            <SideButton
              text="Data Science REU Researcher"
              section={false}
              idScroll="iupui"
            />
            {/* <SideButton
              text="DIVE Research Assistant"
              section={false}
              idScroll="dive"
            /> */}
            {/* <SideButton
              text="Course Instructor, AIMS"
              section={false}
              idScroll="aims"
            /> */}
          </div>
          <div className="group">
            <SideButton text="helpful links" section={true} idScroll="help" />
            <SideButton text="Resume" section={false} idScroll="resume" />
            <SideButton text="Publications" section={false} idScroll="publications" />
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