import React from "react";

// React component that displays a 4-digit counter. 
// Begins at 0,000
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  ones: 0,
                    tens: 0,
                    hund: 0,
                    thou: 0 }
    this.countByOne = this.countByOne.bind(this);
    this.startCounting = this.startCounting.bind(this);
    this.resetPlaceValue = this.resetPlaceValue.bind(this);
  }
  componentDidMount() {
    this.startCounting()
  }

  startCounting() {
    // one-second interval
    setInterval(this.countByOne, 1000);
  }

  countByOne() {
    if (this.state.ones === 9) {
      this.setState({ ones: 0 })
      this.resetPlaceValue(1)
      this.incrementPlaceValue(10)
    } else {
      this.setState(({ ones }) => ({ ones: ones + 1 }));
    }
  }

  // resets the place value that is passed in then calls incrementPlaceValue(place*10) to
  // increment the next place value. 
  // i.e.: if the ten's place === 9, reset ten's place to 0 and increment the hundred's place by 1
  resetPlaceValue(place) {
    if (place === 10){
      this.setState({ tens: 0 })
      this.incrementPlaceValue(100)
    } else if (place === 100){
      this.setState({ hund: 0 })
      this.incrementPlaceValue(1000)
    } else if (place === 1000){
      this.setState({ thou: 0 })
    }
  }

  // makes sure that the place value that is being incremented is < 10.
  // if it is === 10, call resetPlaceValue(10)
  incrementPlaceValue(place) {
    if (place === 10){
      if (this.state.tens === 9) {
        this.resetPlaceValue(10)
      } else {
        this.setState(({ tens }) => ({ tens: tens + 1 }));
      }
    } else if (place === 100){
      if (this.state.hund === 9) {
        this.resetPlaceValue(100)
      } else {
        this.setState(({ hund }) => ({ hund: hund + 1 }));
      }
    } else if (place === 1000) {
      if (this.state.thou === 9) {
        this.resetPlaceValue(1000)
      } else {
        this.setState(({ thou }) => ({ thou: thou + 1 }));
      }
    }
  }

 
  render() {
    return (
      <div>
        <Digit val={this.state.thou}/>
        <span>,</span>
        <Digit val={this.state.hund}/>
        <Digit val={this.state.tens}/>
        <Digit val={this.state.ones}/>
      </div>
    );
  }
}
 
class Digit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.val })
  }

  // update digit value on change
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.val });  
  }

  render() {
    return <span>{this.state.value}</span>;
  }
}

export default Counter;