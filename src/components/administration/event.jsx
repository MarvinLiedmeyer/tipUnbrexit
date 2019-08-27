import React, { PureComponent } from 'react';
import './style2.scss'

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Event extends PureComponent {

    constructor(){
        super()
        
    }

    render() {
        return (
            <div className="eventHolder">
                <h3>{this.props.headline}</h3>
                <p>{this.props.subline}</p>
            </div>
        );
    }
}

export default Event;
