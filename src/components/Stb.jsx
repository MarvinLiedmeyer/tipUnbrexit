import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Headline from './header/headline/Headline';
import './Stb-Components/main.css';
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
                            <Headline headline="Dir gefällt der Live-Act?" style={{ marginTop: '5%' }} />
                        </div>
                        <div className="main">
                            <LastSpender />
                            <div className="box2 sb11">
                                <p style={{ color: 'black' }}>"Winken"</p>
                            </div>
                            <div className="qrCodetxt">
                                <div className="logop">
                                    <p >Unterstütze</p>
                                    <Logo />
                                </div>
                                <QrCode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Stb);
