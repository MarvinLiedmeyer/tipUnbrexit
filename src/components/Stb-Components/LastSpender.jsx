import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import './LastSpender.css';
import { List, ListItem } from 'chayns-components';


class LastSpender extends PureComponent {
    render() {
        return (
            <div className="list">
                <List>
                    <ListItem
                        style={{ display: 'flex' }}
                        title={(<p>Leonhard Driesch</p>)}
                        image="http://placekitten.com/200/300"
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
                                <h1> 2£ </h1>
                            </div>
                        )}
                    />
                    <ListItem
                        style={{ display: 'flex' }}
                        title={(<p>Leonhard Driesch</p>)}
                        image="http://placekitten.com/200/300"
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
                                <h1> 2£ </h1>
                            </div>
                        )}
                    />
                    <ListItem
                        style={{ display: 'flex' }}
                        title={(<p>Leonhard Driesch</p>)}
                        image="http://placekitten.com/200/300"
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
                                <h1> 2£ </h1>
                            </div>
                        )}
                    />
                </List>
            </div>
        );
    }
}

export default hot(module)(LastSpender);
