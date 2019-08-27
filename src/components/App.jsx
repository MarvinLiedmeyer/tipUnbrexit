import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import Donation from './donations/donate';
import AdminDonation from './administration/adminDonation'
import Verlauf from './administration/verlauf'

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {

    render() {
        return (
            <div className="tapp">
                <Headline headline="Make a Tip!" subline="The bandname will shown here..."/>
                <Intro intro="The message to the guests will be placed here..." website="www.google.de"/>
                <Donation/>
                
                <AdminDonation/>
                <Verlauf
                />
            </div>
        );
    }
}

export default hot(module)(App);
