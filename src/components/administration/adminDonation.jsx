import React, { PureComponent } from 'react';
import {Accordion , Calendar, Button, Input} from 'chayns-components'
import Event from './event'
import Content from './content'

class AdminDonation extends PureComponent {
    render() {
        return (
            <div className="content__card">
                <h2>Administration</h2>
                <Calendar/>
                <Event
                headline = 'The Quarrymen Beatles'
                subline = 'von 21:00 Uhr bis 23:30 UHr'
                />
                <Event
                headline = 'The Rolling Stones'
                subline = 'von 21:00 Uhr bis 23:30 UHr'/>
                <Event
                headline = 'The White Stripes'
                subline = 'von 21:00 Uhr bis 23:30 UHr'/>
              <Accordion
              head= 'neues Event'
              >
                <div className="accordion__content">
                
                <Content/>
                </div>
              </Accordion>
                

            </div>
        );
    }
}

export default AdminDonation;
