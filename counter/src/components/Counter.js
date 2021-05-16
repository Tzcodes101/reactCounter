import React, { Component } from 'react';

class Counter extends Component {

    //replace prop with state
    state = {
        count: 42
    };

    render()
        {
            return <button>{this.state.count}</button>
        }
}

export default Counter;