import React from 'react';
// import PropTypes from "prop-types";


class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('hello');
  }
  state = {
    count: 0
  };
  add = () => {
    // this.setState({ count: this.state.count +1 }); //가능은 하지만 직접 state 수정하지 말 것
    this.setState(current => ({ count: current.count +1 }));
  };   
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
  };
 
  componentDidMount() {
    console.log("component rendered")
  }
  componentDidUpdate() {
    console.log("I just Updated")
  }
  componentWillMount() {
    console.log("Goodbye, cruel world")
  }
  render() {
    console.log("I am rendered")
      return (
            <div>
              <h1>The number is: {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
             </div>
      );
  }
}

export default App;