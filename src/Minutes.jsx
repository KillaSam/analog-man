import React from 'react';
class Minutes extends React.Component {
    render(){
        return(
            <div className="minutes-wrapper" style={{transform: 'rotate('+this.props.value+'deg)'}}>
                <div className="minutes"></div>
            </div>
        )
    }
}

export default Minutes;