import React from 'react';
import { ReactComponent as LinkedInSVG } from './static/linkedIn.svg'
import { ReactComponent as GithubSVG } from './static/Github.svg'
import { ReactComponent as AngelSVG } from './static/angel.svg'

import './stylesheet/left.scss'


class LeftNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div className="left-container">
                <a href="https://www.linkedin.com/in/andres-k-bb9b35196/"><LinkedInSVG className="linked-in"></LinkedInSVG></a>
                <a href="https://github.com/andreskimlee"><GithubSVG className="github"></GithubSVG></a>
                <a href="https://angel.co/andres-kim-lee"><AngelSVG className="angel"></AngelSVG></a>
            </div >
        )
    }
}

export default LeftNav;
