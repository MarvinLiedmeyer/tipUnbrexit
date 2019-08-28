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


    // createList() {
    //     const { exampleList } = this.state.exampleList;
    //     return (

    //     )
    // }
    render() {
        return (
            <div className="list">
                <h2 style={{ color: '#5DFFC3' }}>Danke an</h2>
                <List>
                    <ListItem
                        className="animated fadeInLeft"
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
                        overflow="hidden"
                        right={(
                            <p style={{ marginLeft: '20%', color: '#FFEE00' }}> 20£ </p>
                        )}
                    />
                    <ListItem
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
                        overflow="hidden"
                        right={(
                            <p style={{ marginLeft: '20%', color: '#FFF951' }}> 20£ </p>
                        )}
                    />
                    <ListItem
                        className="moved"
                        title={(<p>Angela Merkel</p>)}
                        image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg"
                        overflow="hidden"
                        right={(
                            <p style={{ marginLeft: '20%', color: '#FFF951' }}> 2000£ </p>
                        )}
                    />
                </List>
            </div>
        );
    }
}

export default hot(module)(LastSpender);
