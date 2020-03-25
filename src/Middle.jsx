import React from 'react';

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
                middle
            </div>
        )
    }
}

export default Middle;
