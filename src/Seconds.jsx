import React from 'react';
class Seconds extends React.Component {
    render(){
        return(
            <div className="seconds-wrapper" style={{transform: 'rotate('+this.props.value+'deg)'}}>
                <div className="seconds"></div>
            </div>
        )
    }
}

export default Seconds;