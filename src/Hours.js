import React from 'react';
class Hours extends React.Component {
    constructor(props){
        super(props)        
    }
    componentDidMount(){       
        this.nextStep = setInterval(() => document.querySelector('.hours-wrapper').style.transform = `rotate(${this.props.value}deg)`, 1000)
    }
    render(){
        return(
            <div className="hours-wrapper">
                <div className="hours"></div>
            </div>
        )
    }
}

export default Hours;