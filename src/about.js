import React from 'react';
import './about.css';
import MyPhoto from "../src/images/photo.jpg";

class AboutMe extends React.Component{
    render(){
        const name="Wojciech Kubiak";
        const studyyear="3";   

        return(
            <div className="aboutDiv">  
            <h className="navigatorsText"><b>ABOUT ME</b></h> 
                <div className="aboutDivFrames">
                    <img src={MyPhoto} className="myPhoto" alt=""></img>
                </div>
                <div className="aboutDivFrames">
                    <p>My name is <b>{name}</b> and I'm <b>student ({studyyear}rd year)</b> of 
                    <b> Uniwersytet Wroclawski, Physics and Astronomy Department</b>. 
                    Field of study: 
                    <b> Applied Computer Science and Measuring Systems</b>.</p>
                </div>    
            </div>
        );
    }
}

export default AboutMe