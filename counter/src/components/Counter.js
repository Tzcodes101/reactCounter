import React, { Component } from 'react';

class Counter extends Component {

    //replace prop with state
    state = {
        count: 0
    };

    //handle click function to increase count on clicks
    handleClick = () => {
        this.setState((prevState, { count }) => ({
            count: prevState.count + 1
        }));
    }

    render()
        {
            return <button onClick={this.handleClick}>{this.state.count}</button>
        }
}

export default Counter;