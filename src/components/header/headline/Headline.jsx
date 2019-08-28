import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Headline extends PureComponent {
    render() {
        const { headline, subline } = this.props;


        return (
            <div>
                <h1 style={{ color: 'white', fontSize: '220%' }}>{headline}</h1>
            </div>
        );
    }
}

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
    subline: PropTypes.string.isRequired
};
export default Headline;
