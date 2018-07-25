import React from 'react';
import './app.css';
import Header from './header.js';
import AboutMe from './about.js';
import Projects from './projects.js';
import Abilities from './abilities.js';
import Contact from './contact.js';


class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <AboutMe/>
                <Projects/>
                <Abilities/>
                <Contact/>

            </div>
        );
    }
}

export default App
