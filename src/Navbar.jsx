import React from 'react';
import { ReactComponent as Logo } from './solvent.svg';
import './stylesheet/navbar.scss'
import Resume from './static/andres_lee.pdf'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div className="NavContainer">
                <Logo className="logo" />
                <ul>
                    <li className="first"><div>01.</div>About</li>
                    <li className="second"><div>02.</div>Experience</li>
                    <li className="third"><div>03.</div>Work</li>
                    <li className="fourth"><div>04.</div>Contact</li>
                    <li className="fifth"><a href={Resume}><button className="resume-button" >Resume</button></a></li>
                </ul>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        )
    }
}

export default NavBar;
