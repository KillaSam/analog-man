import React from 'react';
class Minutes extends React.Component {
    constructor(props){
        super(props)        
    }
    componentDidMount(){       
        this.nextStep = setInterval(() => document.querySelector('.minutes-wrapper').style.transform = `rotate(${this.props.value}deg)`, 1000)
    }
    render(){
        return(
            <div className="minutes-wrapper">
                <div className="minutes"></div>
            </div>
        )
    }
}

export default Minutes;