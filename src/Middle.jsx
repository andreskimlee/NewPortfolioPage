import React from 'react';
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

class Middle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div className="mid-container">
                <SlideDown className={'my-dropdown-slidedown'}>
                    <p>Hi, my name is</p>


                    <h1 className="name-text">Andres Kim Lee.</h1>
                    <h1 className="second-text">I build things for the web.</h1>

                    <p className="third-text">I'm a software engineer based in New York, NY specializing in building full stack applications and websites with a bias towards front-end development.</p>
                    <button className="Get-In-Touch"> Get In Touch </button>
                    <div className="Header-1">About Me</div>
                </SlideDown>

            </div>

        )
    }
}

export default Middle;
