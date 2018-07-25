import React from 'react';
import './abilities.css';
import JSBadge from "../src/images/js.png";
import CSSBadge from "../src/images/css.png";
import CISBadge from "../src/images/cis.png";
import REACTBadge from "../src/images/reactjs.png";
import HTMLBadge from "../src/images/html.png";

class Abilities extends React.Component{
    render(){
        return(
            <div className="abilitiesDiv">
                <img src={JSBadge} className="Badges" alt=""></img>
                <img src={REACTBadge} className="Badges" alt=""></img>
                <img src={HTMLBadge} className="Badges" alt=""></img>
                <img src={CSSBadge} className="Badges" alt=""></img>
                <img src={CISBadge} className="Badges" alt=""></img>
            </div>
        );
    }
}

export default Abilities