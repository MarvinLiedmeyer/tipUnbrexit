import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import './LastSpender.css';
import { List, ListItem } from 'chayns-components';

class LastSpender extends PureComponent {
    constructor() {
        super();
        this.state = {
            exampleList: [{
                "name": "Marivn Liedmeyer",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg",
                "tip": "200£"
            },
            {
                "name": "Marivn Liedmeyer",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg",
                "tip": "200£"
            },
            {
                "name": "Marivn Liedmeyer",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg",
                "tip": "200£"
            },
            {
                "name": "Marivn Liedmeyer",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg",
                "tip": "200£"
            },],
        };
    }


    createList() {
        const { exampleList } = this.state.exampleList;
        return (

        )
    }
    render() {
        return (
            <div className="list">
                <h2 style={{ color: '#669483', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', textAlign: 'center' }}>Letzte Spender</h2>
                <List>
                    <ListItem
<<<<<<< Updated upstream
                        title={(<h2>Leonhard Driesch</h2>)}
                        image="http://placekitten.com/200/300"
=======
                        className="animated fadeInLeft"
                        style={{ display: 'flex' }}
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
                                <p style={{ color: '#669483' }}> 20£ </p>
                            </div>
                        )}
                    />
                    <ListItem
                        style={{ display: 'flex' }}
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
>>>>>>> Stashed changes
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
                                <p style={{ color: '#669483' }}> 200£ </p>
                            </div>
                        )}
                    />
                    <ListItem
<<<<<<< Updated upstream
                        title={(<h2>Leonhard Driesch</h2>)}
                        image="http://placekitten.com/200/300"
=======
                        className="moved"
                        style={{ display: 'flex' }}
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
>>>>>>> Stashed changes
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
<<<<<<< Updated upstream
                                <h1> 10£ </h1>
=======
                                <p style={{ color: '#669483' }}> 2000£ </p>
>>>>>>> Stashed changes
                            </div>
                        )}
                    />
                    <ListItem
<<<<<<< Updated upstream
                        title={(<h2>Leonhard Driesch</h2>)}
                        image="http://placekitten.com/200/300"
=======
                        className="animated fadeOutLeft"
                        style={{ display: 'flex' }}
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
>>>>>>> Stashed changes
                        overflow="hidden"
                        right={(
                            <div
                                style={{
                                    marginLeft: '5%',
                                    // opacity: '0.5',
                                    backgroundColor: 'white'
                                }}
                            >
                                <p style={{ color: '#669483' }}> 500£ </p>
                            </div>
                        )}
                    />
                </List>
            </div>
        );
    }
}

export default hot(module)(LastSpender);
