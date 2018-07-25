import React from 'react';
import './footer.css';
import {Navbar} from 'reactstrap';
import REACTBadge from "../src/images/reactjs.png";

class Footer extends React.Component{
    render(){
        return(
            <Navbar color="dark" light expand="sm">
                <div>
                    <img src={REACTBadge} alt="" style={icoSize}></img>
                    <p className="foot">Site created with: ReactJS</p>
                </div>
            </Navbar>
        );
    }
}


export default Footer;

const icoSize = {
    height: "50px",
    width: "50px",
}
