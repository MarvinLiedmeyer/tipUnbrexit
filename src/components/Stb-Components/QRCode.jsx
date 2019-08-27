import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import './QR-Code.css';
// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class QrCode extends PureComponent {
    render() {
        return (
            <img className="qrcode" src="https://webapi.tobit.com/chaynsqrcodegenerator/v1.0/svg?value=https://chayns.cc/9yjzc7&color=005EB8" alt="QR-Code" />
        );
    }
}

export default hot(module)(QrCode);
