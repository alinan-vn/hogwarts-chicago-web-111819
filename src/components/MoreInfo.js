import React from 'react';


export default class MoreInfo extends React.Component {
    isGreased = () => {
        if (this.props.hogsData.greased){
            return 'Greased'
        } else {
            console.log(this.props)
            return 'Ungreased'
        }
    }
    render(){
        return(
            <div>
                <p><strong>{this.isGreased()}</strong></p>
                <p>Highest medal achieved: {this.props.hogsData['highest medal achieved']}</p>
                <p>Weight: {this.props.hogsData.weight} lbs</p>
            </div>
        )
    }
}
