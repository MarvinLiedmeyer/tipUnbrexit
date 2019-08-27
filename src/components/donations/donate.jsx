import React, { PureComponent } from 'react';
import{Input, Checkbox, Button, TextArea, AmountControl} from 'chayns-components'
import "./style.scss"

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Donation extends PureComponent {
    constructor() {
        super()
        this.state = {
            isAnonym: false,
            tip: 3,
            message: ''
        }
    }

    handleSeek = (event)=>{
        const {value} = event.target
        console.log(value)
        this.setState({tip: value})
    }
    

    render() {
        console.log(this.state.isAnonym)
        return (
            <div className="tapp__content">
                <div className="content__card" >
                  <h2 className="h2">Trinkgeld geben</h2>
                  <form>
                      <div className="checkBoxHolder">
                        <Checkbox
                      className="checkAnonym"
                      name="isAnonym"
                      // eslint-disable-next-line react/destructuring-assignment
                      checked={this.state.isAnonym}
                      onChange={checked=> this.setState({isAnonym: checked})}
                      label= "Anonym"
                      />  
                      </div>
                      
                      

                      <input id="betAmountSlider"
                       className="amount--range"
                        type="range"
                        min="1" max="10"
                        step="1" value={this.state.tip}
                        onChange={this.handleSeek}
                        >
                    </input>
                    

                      <TextArea
                      type="text"
                      name = 'message'
                      placeholder="(optional) Deine Nachricht..."
                      className="messageInput"
                      onChange={value=> this.setState({message: value})}
                      />
                     
                        <Button
                        className="donateBtn"
                        >{this.state.tip}£ spenden</Button>
                      
                      
                      
                  </form>
                  
                </div>
                
            </div>
        );
    }
}

export default Donation;

//<input id="betAmountSlider" class="amount--range" type="range" min="0.5" max="5" step="0.5" value="2.50" style="background: -webkit-linear-gradient(left, rgb(0, 77, 48) 0%, rgb(0, 77, 48) 45%, rgb(221, 221, 221) 45%);">