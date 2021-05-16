import React, { Component } from 'react';

class Counter extends Component {
 render()

 //reference count prop in button
    {
        return <button>{this.props.count}</button>
    }
}

export default Counter;