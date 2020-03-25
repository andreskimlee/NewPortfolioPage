import React from 'react';
import LeftNav from './LeftNav'
import RightSide from './RightSide'
import Middle from './Middle'
import './stylesheet/Main.scss'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div className="main-container">
                <LeftNav></LeftNav>
                <Middle ></Middle>
                <RightSide></RightSide>
            </div>
        )
    }
}

export default Main;
