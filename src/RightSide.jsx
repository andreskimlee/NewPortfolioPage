import React from 'react';

class RightSide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div className="right-container">
                Right
            </div>
        )
    }
}

export default RightSide;
