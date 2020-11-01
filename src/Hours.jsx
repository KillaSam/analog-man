import React from 'react';
class Hours extends React.Component {
    render(){
        return(
            <div className="hours-wrapper" style={{transform: 'rotate('+this.props.value+'deg)'}}>
                <div className="hours"></div>
            </div>
        )
    }
}

export default Hours;