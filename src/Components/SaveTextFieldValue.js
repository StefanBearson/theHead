import React from 'react';
import  "../App.css";
export default class InputField extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }
    
    handleKeyPress = e => {
        // We pass the new value of the text when calling onAccept
        if (e.key === "Enter") {
            console.log("Enter Pressed")
            this.setState({value: e.target.value})
            console.log("Value Saved: "+ e.target.value);
        }
    }
    render(){
        const style = {
            width: "90%",
           outline: "none",
           margin: "auto",
           padding: "1em 0.5em",
           marginBottom: "2em",
           boxShadow: "0px 3px 3px -2px #8888885b",
           border: "none",
           backgroundColor: "lightGray"
           };
           const divstyle = {
               width:"60%"
           }
        return(
            <div style={divstyle}>
                <input
            style={style}
            onKeyPress={this.handleKeyPress}
            type="text"
            placeholder="Search contact by typing.."
          />
            </div>
        )
    }
}

