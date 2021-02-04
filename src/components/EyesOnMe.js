import React, { Component } from 'react';

class EyesOnMe extends Component {
    focus = () => {
        console.log("Good!")
    }

    blur = () => {
        console.log("Hey! Eyes on me!")
    }

    render() { 
        return ( 
            <button onFocus={this.focus} onBlur={this.blur}>Focus Button</button>
         );
    }
}
 
export default EyesOnMe;