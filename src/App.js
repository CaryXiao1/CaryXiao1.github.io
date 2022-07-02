
import './App.css';
import React from 'react';

import bust from './img/main-bust.jpg';
import fsoc from './img/fsoc.JPG';
import madsa from './img/madsa.png';

import SideButton from './components/SideButton';

function App() {
  return (
    <div className='App' id='0'>
      <div id='side-bar'>
        <div id='side-main'>
          <button id='side-logo' onClick={goToTop}>cary xiao</button>
          <div className='group'>
            <SideButton text='projects' section={true} idScroll='1' />
            <SideButton text='ML Filters for FSOC' section={false} idScroll='2' />
            <SideButton text='MADSA' section={false} idScroll='3' />
          </div>

          <div className='group'>
            <SideButton text='experience' section={true} idScroll='4' />
            <SideButton text='CS 198 Course Instructor' section={false} idScroll='5' />
            <SideButton text='NSF REU Researcher, IUPUI' section={false} idScroll='6' />
            <SideButton text='DIVE Research Assistant' section={false} idScroll='7' />
            <SideButton text='Course Instructor, AIMS' section={false} idScroll='8' />
          </div>
          <div className='group'>
            <SideButton text='helpful links' section={true} idScroll='9' />
            <SideButton text='Resume' section={false} idScroll='10' />
            <SideButton text='Publications' section={false} idScroll='11' />
          </div>
          
        </div>
        <div id='side-arrow'>
          <button id='arrow-out' className='no-btn' onClick={moveMenuOut}><i className='fa-solid fa-angle-right icon fa-2x'></i></button>
          <button id='arrow-in' className='no-btn' onClick={moveMenuIn} hidden><i className='fa-solid fa-angle-left icon fa-2x'></i></button>
        </div>
      </div>
      
      

      <div id='socials'>
        <a className='none' href='https://www.linkedin.com/in/cary-xiao/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <a className='none' href='https://github.com/CaryXiao1' target='_blank' rel='noreferrer'><i class="fa-brands fa-github fa-xl"></i></a>
        <a className='none' href='mailto:caryxiao@cs.stanford.edu' target='_blank' rel='noreferrer'><i class="fa-solid fa-envelope fa-xl"></i></a>
        
      </div>
      

      <div id='main-body'>
        <div className='card' >
        <img src={bust} className="App-logo" alt="logo" />
        <h3 id="img-text">Hey There! <br />
        I'm Cary, a Computer Science major at
        Stanford University. I enjoy working on
        projects that can help others.</h3>
          
        </div>
        <hr className='divide-card'/>
        <h1 className='section-header' id='1'>projects</h1>
        <div className='card' id='2'>
          <div className='card-major p-right'>
            <a className='h2' href='https://dl.acm.org/doi/abs/10.1145/3476883.3520201?casa_token=tuTFKVQfShAAAAAA:hhodH-5JIvhYZCpHVqxHotXd53BHkaOPJyoAlgg7IifU5B-_C0cei2eyMsyQcbQavP5_HP8UNhPz1w' target='_blank'  rel="noreferrer"><h2>A Low-Power, Machine Learning-based Optical Communications System for Disaster Relief</h2></a>
            <p>For this project, I designed and built a 3D-printed, Arduino-based, automatically realigning 
                wireless communication system to be quickly deployed into disaster-struck 
                regions with damaged infrastructure. The prototype used an array of photoelectric diodes to
                identify where the transmitter's laser was hitting the reciever, enabling for the devices to
                realign their lasers and reduce network downtime.</p>
            <p>I also trained an SVM Machine Learning model to correct errors for essential messages 
                sent through the previously created system, leveraging the redundancy of natural language
                to correct up to 98% of 1-bit errors in words. </p>
            <p>This project was presented in the 2020 and 2021 Regeneron International Science & Engineering Fair (ISEF), and it was published
              in the 2022 ACM Southeast Conference.
            </p>
          </div>
          <div className='card-minor'>
            <img src={fsoc} alt="FSOC Device"/>
          </div>
        </div>
        <div className='card' id='3'>
          <div className='card-minor'>
            <img src={madsa} alt="MADSA Apparatus"/>
          </div>  
          <div className="card-major p-left">
          <a className='h2' href='https://dl.acm.org/doi/abs/10.1145/3374135.3385273?casa_token=VTyd9nSTi2IAAAAA:9-B_bu7VsocthrQKZZjrr73B2CkH4rHthFScYQtTB_PVY-HHSO05mA2k--4Ubmokv75vQsU9w4puig' target='_blank'  rel="noreferrer"><h2>MADSA: Music Accuracy Development using Spectral Analysis</h2></a>
            <p>In this project, I developed a Java-based Music Helper Application to aid aspiring musicians in learning pieces without
               having to pay for a tutor. To do this, the application used a Fast Fourier Transform to create overlapping spectrograms,
               which graphically compared the performance of the user versus a reference sound file.</p>
            <p>I presented the project at the 2019 Intel ISEF and received the 2019 Oracle Academy Award. 
              I also presented and published the paper in the 2020 ACM Southeast Conference .</p>
          </div>
        </div>
        <hr className="divide-card"/>
        <h1 className='section-header' id='4'>experience</h1>
        <div className='card' id='5'>
          <div className="card-major p-right">
          <a className='h2' href='https://cs198.stanford.edu/cs198/ProgramStructure.aspx' target='_blank'  rel="noreferrer"><h2>CS 198 Instructor for Programming Methodologies</h2></a>
            <p>I will lead sections for <a className='h2' href='https://web.stanford.edu/class/cs106a/' target='_blank'  rel="noreferrer">CS 106A</a> in Autumn 2022, teaching students about core concepts 
              and practices of programming in Python.</p>
            <p>I will also help troubleshoot student code and grade assignments every week, and twice 
              during the quarter, I will aid in grading the midterm or final for the class.</p>
          </div>
          <div className='card-minor'>
            <h2 className='minor'><em>Stanford University <br /> September 2022 - Present</em></h2>
          </div>    
        </div>

        <div className='card' id='6'>
          <div className="card-major p-right">
            <a className='h2' href='https://et.iupui.edu/departments/cigt/research/reu/' target='_blank'  rel="noreferrer"><h2>NSF REU Researcher</h2></a>
            <p>I am spending the summer learning about the fundamentals of Cybersecurity and researching 
              as an undergraduate.</p>
            <p> Aside from learning topics like WEP and WPA/WPA2 encryption, I am currently working to visualize
              anonymous patients' data as nodes on a graph, creating various Graph-based Neural Networks to predict
              whether a given patient will develop sarcopenia. </p> 
            <p>Comparing this patient's time-sensitive health conditions, medication history, and demographics, 
              my group's research aims to predict future a future diagnosis of sarcopenia by looking at the 
              patients that are most similar to a given patient and whether they developed the disease. </p>
          </div>
          <div className='card-minor'>
            <h2 className='minor'><em>IUPUI <br /> June 2022 - Present</em></h2>
          </div>  
        </div>

        <div className='card' id='7'>
          <div class="card-major p-right">
            <a className='h2' href='https://earth.stanford.edu/equitable-transportation-decarbonization' target='_blank'  rel="noreferrer"><h2>Research Assistant, Decommisioning ICE Vehicles (DIVE) Group</h2></a>
            <p>I used Python to call Google Maps APIs and gather average rush-hour commute times on critical roads in Sonoma County, CA.</p>
              <p>I also processed the data to find out how the commute times on a given road changed over time on a given day, allowing for
              potential future analysis of this data to help estimate the number of cars on sections of the road and to compare this data to 
              pollution levels in Sonoma County. </p>
          </div>
          <div className='card-minor'>
            <h2 className='minor'><em>Stanford University <br /> October 2021 - January 2022</em></h2>
          </div>  
        </div>

        <div className='card' id='8'>
          <div class="card-major p-right">
            <h2>Course Instructor, Adventures in Math and Science (AIMS)</h2>
            <p>Throughout June and July, I repeatedly taught two weeklong virtual classes on 3D 
              Printing and making devices using Arduinos to middle and high school students, giving 
              hour-long introductory lectures and helping students troubleshoot problems with their
              circuits and arduino code.</p>
            <p>Aside from helping summer-time students in the ASMS-hosted summer camps, I also taught 
              these classes to disadvantaged students as a partnership between ASMS and the Boy's and 
              Girl's Club of Alabama.</p>
            <p><em>Note: The AIMS Summer Camp has since been replaced with the <a className='h2' href='https://www.asms.net/summer-camps/alabama-stem-leadership-academy' target='_blank' rel='noreferrer'>ASMS STEM Leadership Academy</a>.</em></p>
          </div>
          <div className='card-minor'>
            <h2 className='minor'><em>Alabama School of Math and Science <br /> June 2021 - July 2021</em></h2>
          </div>  
        </div>
        <hr className="divide-card"/>
        <h1 className='section-header' id='9'>helpful links</h1>
        <div className='card'>
          <a id='10' href="https://drive.google.com/file/d/1N8aNYw-pmX5JHEkpMY_6aFFWHrwcBEim/view?usp=sharing" target="_blank" rel="noreferrer">resume</a>
          <a id='11' href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C15&q=%22Cary+Xiao%22&btnG=&oq=%22cary+" target="_blank" rel="noreferrer">  publications</a>
        </div>
      </div>
    </div>
  );
}

function goToTop() {
  document.getElementById('0').scrollIntoView({behavior: 'smooth'});
}

function moveMenuOut() {
  document.getElementById('side-bar').style.marginLeft = 0;
  document.getElementById('arrow-out').setAttribute('hidden', true);
  document.getElementById('arrow-in').removeAttribute('hidden');
}

function moveMenuIn() {
  document.getElementById('side-bar').style = '-150px';
  document.getElementById('arrow-in').setAttribute('hidden', true);
  document.getElementById('arrow-out').removeAttribute('hidden');
}

export default App;
