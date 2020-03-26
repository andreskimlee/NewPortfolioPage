import React from 'react';
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import './stylesheet/middle.scss'
import funnyGif from './static/funny-comp.gif'
import { ReactComponent as GithubSVG } from './static/Github.svg'
import { ReactComponent as GoTo } from './static/goTo.svg'

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
                    <div className="About-Me-Container">
                        <div className="About-me-header">About Me</div>
                        <div className="prof-container">
                            <p className="bio-text">
                                Hello! I'm Andres, a software engineer based in New York, NY.
                                Whether it's cooking, photography, or thinking of my next big idea to pitch on Shark Tank,
                                I have a creative side to me that I have always enjoyed exploring and software engineering has
                                been an awesome medium for me to leverage that. I love learning new technologies and challenging
                                myself to think logically, methodically, and creatively.
                                <br></br>
                                <br></br>
                                Here are a few technologies I've been working with recently:
                                <ul className="tech-list">
                                    <li className="tech-item">JavaScript (ES6+)</li>
                                    <li className="tech-item">React + React Native</li>
                                    <li className="tech-item">Redux</li>
                                    <li className="tech-item">Node.js</li>
                                    <li className="tech-item">Express</li>
                                    <li className="tech-item">HTML & (S)CSS</li>
                                    <li className="tech-item">Ruby On Rails</li>
                                    <li className="tech-item">MongoDB</li>
                                    <li className="tech-item">Postgresql</li>
                                    <li className="tech-item">Python</li>
                                </ul>
                            </p>
                            <div className="funny-cont">
                                <img className="funny-gif" src={funnyGif}></img>
                            </div>
                        </div>
                    </div>
                    <div className="Experience-Container">
                        <div className="experience-header">Some Things I've Built</div>
                        <div className="innter-container">
                            <div className="Project-1">
                                <div className="project-1-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">Butterflyr</h5>
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                            Butterflyr is a full stack single page application clone of Facebook. Following the popular functionalities
                                            of the original application, Butterflyr's implementations include the ability to add other users, comment,
                                            like, and post a photo.
                                    </p>
                                    </div>
                                    <ul className="tech-list2">
                                        <li className="tech-items">Ruby On Rails</li>
                                        <li className="tech-items">React.js</li>
                                        <li className="tech-items">Redux.js</li>
                                        <li className="tech-items">AWS S3</li>
                                    </ul>
                                    <GithubSVG className="github"></GithubSVG>
                                    <GoTo className="go-to"></GoTo>
                                </div>
                                <img className="project-1-pic" src="https://i.imgur.com/QZWEucU.png"></img>


                            </div>
                            <div className="Project-1">
                                <div className="project-2-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">Gratitude</h5>
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                            Gratitude is a front-end only application that compares an individual's earnings to those from other countries.
                                            Utilized D3’s built-in force simulation and collision to provide an interactive experience with the plotted data points.
                                    </p>
                                    </div>
                                    <ul className="tech-list2-2">
                                        <li className="tech-items">D3.js</li>
                                        <li className="tech-items">Vanilla JS</li>
                                        <li className="tech-items">HTML</li>
                                        <li className="tech-items">CSS</li>
                                    </ul>
                                    <GithubSVG className="github"></GithubSVG>
                                    <GoTo className="go-to"></GoTo>
                                </div>
                                <img className="project-2-pic" src="https://i.imgur.com/xIze5vM.png"></img>
                            </div>
                            <div className="Project-1">
                                <div className="project-1-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">PiperHood</h5>
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                            a full stack single page application that mimics the functionalities of Robinhood. (Stock Buying website)
                                            Created a dynamic portfolio for users that are color coded based on the performance of the stock in comparison to its current live
                                            price
                                        </p>
                                    </div>
                                    <ul className="tech-list2">
                                        <li className="tech-items">MongoDB</li>
                                        <li className="tech-items">Express.js</li>
                                        <li className="tech-items">React.js</li>
                                        <li className="tech-items">Node.js</li>
                                    </ul>
                                    <GithubSVG className="github"></GithubSVG>
                                    <GoTo className="go-to"></GoTo>
                                </div>
                                <img className="project-1-pic" src="https://i.imgur.com/tIvql1w.png"></img>
                            </div>
                        </div>
                    </div>
                </SlideDown>
            </div>

        )
    }
}

export default Middle;
