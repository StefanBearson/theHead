import React from 'react';

export default class HelloWorld extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
    }  
    
    render(){
        return(
            <div>
                <h1>Hello World Restaurant</h1>
                value: {this.state.value}
                <br/>
                <textarea placeholder="Value here is saved to State:" onBlur={this.handleChange.bind(this)}></textarea>
            </div>
        )
    }
}