/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Intro extends PureComponent {
    render() {
        const { intro, website } = this.props;

        return (
            <div className="tapp__intro">
                {intro}
                <p>
                <br/>
                    <a href={website}>mehr </a>

                     über die Band erfahren...
                </p>
            </div>
        );
    }
}

Intro.propTypes = {
    intro: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
};

export default Intro;
