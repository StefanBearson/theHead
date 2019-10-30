import React from 'react';
import  "../App.css";
export default class InputField extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(event.target.value);
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
            type="text"
            placeholder="Search contact by typing.."
            onBlur={this.handleChange.bind(this)}
          />
            </div>
        )
    }
}

