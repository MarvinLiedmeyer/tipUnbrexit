import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import './Logo.css';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Logo extends PureComponent {
    render() {
        return (
            <img className="logo" src="https://www.the-quarrymen-beatles.de/wp-admin/admin-ajax.php?juwpfisadmin=false&action=wpfd&action=wpfd&task=file.download&wpfd_category_id=31&wpfd_file_id=2563&preview=1" alt="Logo" />
        );
    }
}

export default hot(module)(Logo);
