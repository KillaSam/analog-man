import React from 'react';
class Seconds extends React.Component {
    constructor(props){
        super(props)        
    }
    componentDidMount(){       
        this.nextStep = setInterval(() => document.querySelector('.seconds-wrapper').style.transform = `rotate(${this.props.value}deg)`, 1000)
    }
    componentWillMount(){
        
    }
    render(){
        return(
            <div className="seconds-wrapper">
                <div className="seconds"></div>
            </div>
        )
    }
}

export default Seconds;