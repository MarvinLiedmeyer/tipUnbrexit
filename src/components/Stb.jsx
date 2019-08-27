import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Headline from './header/headline/Headline';
import './Stb-Components/background.css';
import QrCode from './Stb-Components/QRCode';
import Logo from './Stb-Components/Logo';
import LastSpender from './Stb-Components/LastSpender';


class Stb extends PureComponent {
    render() {
        return (
            <div style={{ background: 'black' }}>
                <div className="bg" />
                <div className="tip">
                    <div className="blur">
                        <div className="headlines">
                            <Headline headline="Dir gefällt der Live-Act?" />
                            <div className="logop">
                                <Headline headline="Unterstütze" />
                                <Logo />
                            </div>
                        </div>
                        <div className="main">
                            <LastSpender />
                            <QrCode style={{ justifyContent: 'flexEnd' }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Stb);
