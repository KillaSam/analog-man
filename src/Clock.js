import React from 'react';
import Seconds from './Seconds';
import Minutes from './Minutes';
import Hours from './Hours';

class Clock extends React.Component {
  constructor(){
    super()
    this.state = {
      sec: new Date().getSeconds()*6, 
      min: new Date().getMinutes()*6,
      hr: new Date().getHours()*30
    }
  }
  componentDidMount(){
    this.nextStep = setInterval(() => {        
      this.setState({sec: new Date().getSeconds()*6,
        min: new Date().getMinutes()*6,
        hr: new Date().getHours()*30
      })           
    }, 1000)
  }
  componentWillMount(){
    clearInterval(this.nextStep);
  }
  render(){
    return (
      <div className="clock-wrapper">
        <main className="clock">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="dot"></div>
          <Seconds value={this.state.sec}/>
          <Minutes value={this.state.min}/>
          <Hours value={this.state.hr}/>
        </main>
      </div>
    )
  }
}

export default Clock;
