import React, { PureComponent } from 'react';
import './style2.scss'
import{Input, Button, FileInput} from 'chayns-components'

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Content extends PureComponent {

    constructor(){
        super()
        
    }

    render() {
        return (
            <div className="">
                <Input
                placeholder="Name des Events"
                />

                <FileInput 
                    items={[{ 
                        types: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'], 
                        onChange: console.log, 
                        content: { text: 'Bild hochladen' }, 
                    }]} 
                />


                <Button
                
                >Speichern</Button>
                
            </div>
        );
    }
}

export default Content;
