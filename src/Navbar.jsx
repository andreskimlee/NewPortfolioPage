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

    handleClick(e) {
        if (e.target.className === 'first') {
            window.scrollTo(0, 800)
        }
        if (e.target.className === 'third') {
            window.scrollTo(0, 1600)
        }
        if (e.target.className === 'fourth') {
            window.scrollTo(0, 4200)
        }
    }

    render() {
        return (
            <div className="NavContainer">
                <Logo className="logo" />
                <ul>
                    <li onClick={this.handleClick.bind(this)} className="first"><div>01.</div>About</li>
                    <li onClick={this.handleClick.bind(this)} className="third"><div>02.</div>Projects</li>
                    <li onClick={this.handleClick.bind(this)} className="fourth"><div>03.</div>Contact</li>
                    <li onClick={this.handleClick.bind(this)} className="fifth"><a href={Resume}><button className="resume-button" >Resume</button></a></li>
                </ul>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        )
    }
}

export default NavBar;
