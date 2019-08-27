import React, { PureComponent } from 'react';
import './style2.scss'
import Event from './event'

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Verlauf extends PureComponent {
    render() {
        return (
            <div className="content__card">
                <h3>Verlauf</h3>
                <p>Bereits da gewesene Künstler</p>
                <Event
                headline = 'Elvis Presley'
                subline = 'von 21:00 Uhr bis 23:30 UHr'/>
                <Event
                headline = 'Michael Jackson'
                subline = 'von 21:00 Uhr bis 23:30 UHr'/>
                <Event
                headline = 'Amy Winehouse'
                subline = 'von 21:00 Uhr bis 23:30 UHr'/>
            </div>
        );
    }
}

export default Verlauf;
