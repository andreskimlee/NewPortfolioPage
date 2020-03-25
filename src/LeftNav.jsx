import React from 'react';



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
                I'm Left
            </div>
        )
    }
}

export default LeftNav;
