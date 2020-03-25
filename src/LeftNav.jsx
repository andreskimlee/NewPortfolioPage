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
                <LinkedInSVG className="linked-in"></LinkedInSVG>
                <GithubSVG className="github"></GithubSVG>
                <AngelSVG className="angel"></AngelSVG>
            </div>
        )
    }
}

export default LeftNav;
