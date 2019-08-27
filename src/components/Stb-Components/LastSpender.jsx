import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import './LastSpender.css';
import { List, ListItem } from 'chayns-components';


class LastSpender extends PureComponent {
    render() {
        return (
            <List>
                <ListItem
                    title={(<h2>Leonhard Driesch</h2>)}
                    image="http://placekitten.com/200/300"
                    overflow="hidden"
                    right={(
                        <div
                            style={{
                                marginLeft: '10px',
                                // opacity: '0.5',
                                backgroundColor: 'white'
                            }}
                        >
                            <h1> 2£ </h1>
                        </div>
                    )}
                />
                <ListItem
                    title={(<h2>Leonhard Driesch</h2>)}
                    image="http://placekitten.com/200/300"
                    overflow="hidden"
                    right={(
                        <div
                            style={{
                                marginLeft: '10px',
                                // opacity: '0.5',
                                backgroundColor: 'white'
                            }}
                        >
                            <h1> 10£ </h1>
                        </div>
                    )}
                />
                <ListItem
                    title={(<h2>Leonhard Driesch</h2>)}
                    image="http://placekitten.com/200/300"
                    overflow="hidden"
                    right={(
                        <div
                            style={{
                                marginLeft: '10px',
                                // opacity: '0.5',
                                backgroundColor: 'white'
                            }}
                        >
                            <h1> 2£ </h1>
                        </div>
                    )}
                />
            </List>
        );
    }
}

export default hot(module)(LastSpender);
