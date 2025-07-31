import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      msg: ''
    };
  }

  incrementData = () => {
    if (this.state.counter > 3) {
      this.setState({ msg: "Sorry, value is > 3" });
    } else {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        msg: ''
      }));
    }
  };

  decrementData = () => {
    if (this.state.counter < 1) {
      this.setState({ msg: "Sorry, value is < 1" });
    } else {
      this.setState(prevState => ({
        counter: prevState.counter - 1,
        msg: ''
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <p>{this.state.msg}</p>
        <button onClick={this.incrementData}>Increment</button>
        <button onClick={this.decrementData}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
