import "./App.css";

import bust from "./img/main-bust.png";
import fsoc from "./img/fsoc.JPG";
import madsa from "./img/madsa.png";
import workout from "./img/workout-app.PNG";
import roc from "./img/roc-results.png";
import cs231n from "./img/231n-final-cover.png";
import lightsaber from "./img/lightsaber.png"

import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import SideBar from "./components/SideBar";
import useWindowDimensions from "./hooks/Window";

function App() {
  const {width} = useWindowDimensions()

  return (
    <div className="App" id="top">
      <SideBar innerWidth={width}/>
      <div id="main-body">
        <div id='cards'>
          <div id="socials">
            <a
              className="none"
              href="https://www.linkedin.com/in/cary-xiao/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a
              className="none"
              href="https://github.com/CaryXiao1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a
              className="none"
              href="mailto:caryxiao@cs.stanford.edu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope fa-xl"></i>
            </a>
          </div>
          <div className="card" id='main-picture'>
            <img src={bust} className="App-logo" alt="logo" />
            <h3 id="img-text">
              Hey There! <br />
              I'm Cary, a Stanford CS major (c/o '25) and CS master's from Tuscaloosa, Alabama. 
              I love building things and making coffee.
            </h3>
          </div>
          <hr className="divide-card" />
          <h1 className="section-header" id="projects">
            projects
          </h1>

          <ProjectCard id='lightsaber' img={lightsaber} img_alt={'Picture of lightsaber'} img_float_left={false} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://github.com/CaryXiao1/cs140e-lightsaber"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Wirelessly Bootloaded Lightsaber</h2>
              </a>
              <p>
                As the final project for my Operating Systems implementation 
                class, a partner and I designed and fabricated a fabricator using
                a bare-metal Raspbery Pi. Aside from sourcing materials and 
                designing the hilt, we implemented context switching, added 
                Pulse-Width Modulation, and programmed gyroscope drivers to
                play sounds and change the light intensity based on the strength
                of a swing.
              </p>
              <p>
                I was also responsible for creating a networked bootloader, which 
                sent code via UART to a second r/pi that then wirelessly relayed 
                arbitrary program code to the lightsaber. This sped up development
                by allowing us to quickly change the the code running on the sword
                without needing to open the hilt.
              </p>
            </>
          } />

          <ProjectCard id='cs231n' img={cs231n} img_alt={'Screenshot of workout app with sample information inputted.'} img_float_left={true} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://drive.google.com/file/d/1mK1hqDwvQIY1cOfF9RQqQErwT4QRP4KF/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <h2>STAC: Synthesizing Structure and Tone in Image-to-ASCII Art Conversion</h2>
              </a>
              <p>
                For our Deep Learning for Computer Vision (CS 231N) final project, a partner 
                and I built a Convolutional Neural Network (CNN)-powered 
                pipeline to create arbitrary images into ASCII art. Unlike
                previous approaches, we combined the brightness and structural
                elements of the original image to create ASCII art that generally
                better represented the original image than existing baseline methods. 
              </p>
              <p>
                You can compare the outputs
                {" "}
                  <a
                    className="h2"
                    href="https://forms.gle/mnUiMHnwxeUiaDzv6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  {", "} where Style 3 is our approach, and you can see our final project report 
                  {" "}
                  <a
                    className="h2"
                    href="https://drive.google.com/file/d/1mK1hqDwvQIY1cOfF9RQqQErwT4QRP4KF/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>.
              </p>
            </>
          } />

          <ProjectCard id='workout' img={workout} img_alt={'Screenshot of workout app with sample information inputted.'} img_float_left={false} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://caryxiao.com/workout-app/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Workout App</h2>
              </a>
              <p>
                Over the summer of 2022, I designed a workout helper application
                using React, allowing users to store their weightlifting-related
                workouts and exercises. I also used Chart.js to create line graphs
                showing the given person's body weight, BMI, or exercise-specific
                weight over time.
              </p>
              <p>
                The application can be found{" "}
                <a
                  className="h2"
                  href="https://caryxiao.com/workout-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                {", "}
                and the source code can be found{" "}
                <a
                  className="h2"
                  href="https://github.com/CaryXiao1/workout-app/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </>
          } />

          <ProjectCard id='patient' img={roc} img_alt={'Resulting ROC Curves from Patient-GAT model testing.'} img_float_left={true} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://github.com/CaryXiao1/Patient-GAT"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  Patient-GAT: Disease Prediction using Multi-modal Data Fusion
                  and Weighted Graph Attention Networks
                </h2>
              </a>
              <p>
                As my main research project in the NSF REU at IUPUI, I worked with
                a parter in a student-led project to predict health conditions
                using Graph Attention Networks.
              </p>
              <p>
                To do this, we used patient's Electronic Health Record Data,
                imputing lab variables related to sarcopenia and converting each
                patient's data into a vector representation. Finally, we created a
                patient similarity network using a combination of cosine and
                Dynamic Time Warping similarity, finally training and evaluating
                our Graph Attention Network Model. Our results showed that our
                model outperformed other non-Neural Network and non-Graph-based
                models in terms of Area Under AUC Curve (AUC).
              </p>
              <p>
                I received first author in the resulting paper, published in the {" "}
                <a
                  className="h2"
                  href="https://www.sigapp.org/sac/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ACM 2023 Symposim on Applied Computing (SAC).
                </a>
                .
              </p>
            </>
          } />

          <ProjectCard id='fsoc' img={fsoc} img_alt={'Front and back of built FSOC devices, placed on a dirt ground filled with leaves.'} img_float_left={false} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://dl.acm.org/doi/abs/10.1145/3476883.3520201?casa_token=tuTFKVQfShAAAAAA:hhodH-5JIvhYZCpHVqxHotXd53BHkaOPJyoAlgg7IifU5B-_C0cei2eyMsyQcbQavP5_HP8UNhPz1w"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  A Low-Power, Machine Learning-based Optical Communications
                  System for Disaster Relief
                </h2>
              </a>
              <p>
                For this project, I designed and built a 3D-printed,
                Arduino-based, automatically realigning wireless communication
                system to be quickly deployed into disaster-struck regions with
                damaged infrastructure. The prototype used an array of
                photoelectric diodes to identify where the transmitter's laser was
                hitting the reciever, enabling for the devices to realign their
                lasers and reduce network downtime.
              </p>
              <p>
                I also trained an SVM Machine Learning model to correct errors for
                essential messages sent through the previously created system,
                leveraging the redundancy of natural language to correct up to 98%
                of 1-bit errors in words.{" "}
              </p>
              <p>
                This project was presented in the 2020 and 2021 Regeneron
                International Science & Engineering Fair (ISEF), and it was
                published in the 2022 ACM Southeast Conference.
              </p>
            </>
          } />

          <ProjectCard id='madsa' img={madsa} img_alt={'Screenshot of MADSA Application.'} img_float_left={true} innerWidth={width} extra_classes={'mobile-nospacing'} text={
            <>
            <a
                className="h2"
                href="https://dl.acm.org/doi/abs/10.1145/3374135.3385273?casa_token=VTyd9nSTi2IAAAAA:9-B_bu7VsocthrQKZZjrr73B2CkH4rHthFScYQtTB_PVY-HHSO05mA2k--4Ubmokv75vQsU9w4puig"
                target="_blank"
                rel="noreferrer"
              >
                <h2>MADSA: Music Accuracy Development using Spectral Analysis</h2>
              </a>
              <p>
                In this project, I developed a Java-based Music Helper Application
                to aid aspiring musicians in learning pieces without having to pay
                for a tutor. To do this, the application used a Fast Fourier
                Transform to create overlapping spectrograms, which graphically
                compared the performance of the user versus a reference sound
                file.
              </p>
              <p>
                I presented the project at the 2019 Intel ISEF and received the
                2019 Oracle Academy Award. I also presented and published the
                paper in the 2020 ACM Southeast Conference .
              </p>
            </>
          } />
          <hr className="divide-card" />
          <h1 className="section-header" id="experience">
            experience
          </h1>
          <ExperienceCard id='cs111' 
                          title={<a
                                    className="h2"
                                    href="https://cs198.stanford.edu/cs198/ProgramStructure.aspx"
                                    target="_blank"
                                    rel="noreferrer"
                                  ><h2>Graduate Teaching Assistant </h2></a>}
                          place='Stanford Dept. of Computer Science'
                          date='Sept. 2024 - Present'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                              As a graduate TA for {" "}
                              <a
                                className="h2"
                                href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=cs111&collapse="
                                target="_blank"
                                rel="noreferrer"
                              >
                                Operating Systems (CS 111)
                              </a>
                              , I help students learn about Unix V6 filesystems, multithreading, 
                              crash recovery, and other operating system concepts by grading assignments/exams, 
                              leading sections, and hosting office hours.
                            </p>
                            </>
                          } />
          <ExperienceCard id='yamaha' 
                          title={<a
                                    className="h2"
                                    href="https://cs198.stanford.edu/cs198/ProgramStructure.aspx"
                                    target="_blank"
                                    rel="noreferrer"
                                  ><h2>Software Engineer Intern</h2></a>}
                          place='Yamaha Corporation'
                          date='Jun. 2024 - Aug. 2024'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                              In Yamaha Corporation's headquarters in Hamamatsu, Japan, I developed
                              a Python and OpenCV-based long-term testing application for the {" "}
                              <a
                                className="h2"
                                href="https://usa.yamaha.com/products/unified_communications/video_collaboration/cs-500/index.html"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Yamaha CS-500 and CS-800 conference cameras
                              </a>
                              , which would monitor the device's microphone and video quality over time.
                              <p>
                              Using my application, I compared the quality of different firmware versions and
                              was able to find a previously-unknown frame skipping issue in the camera, 
                              achieving the "most beneficial results" by any intern in the department
                              in the past ten years.
                              </p>
                            </p>
                            </>
                          } />
          <ExperienceCard id='oppia' 
                          title={<a
                                    className="h2"
                                    href="https://oppia.org"
                                    target="_blank"
                                    rel="noreferrer"
                                  ><h2>Developer Workflow Contributor</h2></a>}
                          place='Oppia Foundation'
                          date='Feb. 2023 - Oct. 2023'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                              I helped to improve the experience for Oppia developers by fixing
                              issues and adding features to the Pull Request (PR) testing
                              framework. You can find all my merged PRs {" "}
                              <a
                                className="h2"
                                href="https://github.com/oppia/oppia/pulls?q=is%3Apr+is%3Amerged+author%3ACaryXiao1"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here
                              </a>.
                            </p>
                            <p>
                              Among other features, I enabled the Oppia build artifact to be re-constructed
                              if an automated PR test is re-run more than 24 hours after it was initially run,
                              significantly reducing the need to re-run all tests in a PR. I also added Screen
                              Recording to our Node.js Puppeteer scripts, making it significantly easier to
                              debug flakes in our Puppeteer script.
                            </p>
                            </>
                          } />

          <ExperienceCard id='cs198' 
                          title={<a
                                    className="h2"
                                    href="https://cs198.stanford.edu/cs198/ProgramStructure.aspx"
                                    target="_blank"
                                    rel="noreferrer"
                                  ><h2>Undergraduate Teaching Assistant </h2></a>}
                          place='Stanford Dept. of Computer Science'
                          date='Sept. 2022 - Dec. 2023'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                              I led sections for{" "}
                              <a
                                className="h2"
                                href="https://web.stanford.edu/class/cs106b/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                CS 106B
                              </a>
                              , enabling students to understand concepts like Recursive Backtracking 
                              and Pointers. I also aid students in LaIR Office Hours, grade all sectionees'
                              assignments, and help to proctor/grade the class' exams. 
                              <p>
                              Furthermore, as a
                              veteran SL, I taught as one of the three primary instructors for {" "}
                              <a
                                className="h2"
                                href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=cs198b&collapse="
                                target="_blank"
                                rel="noreferrer"
                              >
                                CS 198B
                              </a>, a class designed to teach section leaders how to Section Lead for CS 106B.
                              </p>
                            </p>
                            </>
                          } />
          <ExperienceCard id='iupui'
                          title={<a
                            className="h2"
                            href="https://et.iupui.edu/departments/cigt/research/reu/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h2>Data Science REU Researcher</h2>
                          </a>}
                          place='Indiana University-Purdue University Indianapolis'
                          date='June 2022 - August 2022'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                I spent my summer learning about the fundamentals of Cybersecurity
                and researching as an undergraduate, where we learned about topic
                such as WPA/WPA2 encryption, historical cryptographic methods, and
                ideal hash function properties.
              </p>
              <p>
                As my primary research project, I worked with a partner to predict
                health outcomes using Graph Attention Mechanisms. For more
                information, please see 'Patient-GAT' under Projects.
              </p>
                            </>
                          } />

          <hr className="divide-card" />
          <h1 className="section-header" id="help">
            helpful links
          </h1>
          <div className="card mobile-nospacing">
            <a
              id="resume"
              href="https://drive.google.com/drive/folders/1XxXDQGibDqgMzAy91GpN_wavApQQd4SR?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
            {" "}
            <a
              id="publications"
              href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C15&q=%22Cary+Xiao%22&btnG=&oq=%22cary+"
              target="_blank"
              rel="noreferrer"
            > 
              publications
            </a>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
