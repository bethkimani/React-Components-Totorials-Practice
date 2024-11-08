import React, { Component } from 'react';

export class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  Updateclick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;  // Correct destructuring
    return (
      <div>
        <button onClick={this.Updateclick}>Clicked {count} times</button>
      </div>
    );
  }
}

export default Click;
