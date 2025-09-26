import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a dedicated Full Stack Developer with a passion for creating dynamic and efficient web applications. I enjoy turning complex problems into simple, elegant, and user-friendly solutions while ensuring seamless and engaging user experiences. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend</h2>
                    <p>HTML, CSS, JavaScript, React </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend</h2>
                    <p>Java, JDBC, Spring Boot</p>
                </div>
            </div> 
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Database & Tools</h2>
                    <p>MySQL, Git</p>
                </div>
            </div>  
        </div>
    
    
    </section>     

  )
}

export default skills