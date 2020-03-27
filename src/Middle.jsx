import React from 'react';
import 'react-slidedown/lib/slidedown.css'
import './stylesheet/middle.scss'
import funnyGif from './static/funny-comp.gif'
import { ReactComponent as GithubSVG } from './static/Github.svg'
import { ReactComponent as GoTo } from './static/goTo.svg'
import { ReactComponent as Folder } from './static/folder.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import './stylesheet/animate.css'


class Middle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return (
            <div className="mid-container">

                <p>Hi, my name is</p>

                <ScrollAnimation animateIn="fadeIn" delay="200">
                    <h1 className="name-text">Andres Kim Lee.</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="300">
                    <h1 className="second-text">I build things for the web.</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="400">
                    <p className="third-text">I'm a software engineer based in New York, NY specializing in building full stack applications and websites with a bias towards front-end development.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="500">
                    <a href="mailto:andreskimlee@gmail.com"><button className="Get-In-Touch"> Get In Touch </button></a>
                </ScrollAnimation>
                <div className="About-Me-Container">
                    <ScrollAnimation animateIn="fadeIn">
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
                    </ScrollAnimation>
                </div>
                <div className="Experience-Container">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="experience-header">Some Things I've Built</div>
                    </ScrollAnimation>
                    <div className="innter-container">
                        <ScrollAnimation animateIn="zoomIn">
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
                                    <a href="https://github.com/andreskimlee/Butterflyr"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="http://butterflyr.herokuapp.com/"><GoTo className="go-to"></GoTo></a>
                                </div>
                                <img className="project-1-pic" src="https://i.imgur.com/QZWEucU.png"></img>


                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn">
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
                                    <a href="https://github.com/andreskimlee/Gratitude-"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="https://andreskimlee.github.io/Gratitude-/"><GoTo className="go-to"></GoTo></a>
                                </div>
                                <img className="project-2-pic" src="https://i.imgur.com/xIze5vM.png"></img>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn">
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
                                    <a href="https://github.com/andreskimlee/WTT-FStack"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="https://techtalentfullstackproject.herokuapp.com/"><GoTo className="go-to"></GoTo></a>
                                </div>
                                <img className="project-1-pic" src="https://i.imgur.com/tIvql1w.png"></img>
                            </div>
                        </ScrollAnimation>


                        <section className="noteworthy-container">
                            <ScrollAnimation animateIn="fadeIn">
                                <h4 className="header-4">Other Noteworthy Projects</h4>
                            </ScrollAnimation>
                            <div className="noteworthy-projects">
                                <ScrollAnimation animateIn="fadeIn" delay="100">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">
                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/andreskimlee/tictactoe"><GoTo className="go-to"></GoTo></a>
                                                </div>
                                                <h5>Tic-Tac-Toe</h5>
                                                <div className="descript-note">
                                                    A Tic-Tac-Toe Game made with Ruby following OOP principles. Made to be played in terminal
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>Ruby</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn" delay="300">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">
                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/gmcln-rct/MERNproject"><GoTo className="go-to"></GoTo></a>
                                                </div>
                                                <h5>Outfitr</h5>
                                                <div className="descript-note">
                                                    An ongoing passion project to disrupt the social media space focused on providing a platform that caters towards influencers
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>MongoDB</li>
                                                    <li>Express</li>
                                                    <li>React</li>
                                                    <li>Node.js</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn" delay="500">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">
                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/andreskimlee/FinClinic"><GoTo className="go-to"></GoTo></a>
                                                </div>
                                                <h5>Mortgage Calculator</h5>
                                                <div className="descript-note">
                                                    A simple mortgage calculator that was developed using Salesforce and lightning components
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>Apex</li>
                                                    <li>Salesforce</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn" delay="100">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">
                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/andreskimlee/frontend-project-tbd"><GoTo className="go-to"></GoTo></a>
                                                </div>
                                                <h5>Duolingo Mock Ad</h5>
                                                <div className="descript-note">
                                                    A mock interactive ad that was developed for a take-home project. The ad utilizes voice and camera as well as web sockets.
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>socket.io</li>
                                                    <li>JavaScript</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn" delay="300">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">
                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/andreskimlee/TechJobs"><GoTo className="go-to"></GoTo></a>
                                                </div>
                                                <h5>TechJobs</h5>
                                                <div className="descript-note">
                                                    A front-end only project utilizing Github Jobs API to display through various filters.
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>React.js</li>
                                                    <li>Redux.js</li>
                                                    <li>HTML6</li>
                                                    <li>CSS</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn" delay="500">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">
                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/andreskimlee/BenchBnB-2"><GoTo className="go-to"></GoTo></a>
                                                </div>
                                                <h5>BenchBnB</h5>
                                                <div className="descript-note">
                                                    a Lite version of AirBnB with benches instead!
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>React.js</li>
                                                    <li>Redux.js</li>
                                                    <li>Postgres</li>
                                                    <li>Ruby on Rails</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>




                            </div>
                        </section>

                    </div>
                </div>
                <div className="final-container">
                    <div className="final-part">What's Next?</div>
                    <div className="final-text">As of {today} I am looking for a software engineer position in the New York Metropolitan area. If you think I would be a good fit for your company
                    please don't hesistate to reach out to me!
                    </div>
                    <a href="mailto:andreskimlee@gmail.com" target="_blank" rel="nofollow noopener noreferrer" class="contact-email">Say Hello</a>
                </div>
            </div>

        )
    }
}

export default Middle;
