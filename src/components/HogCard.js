import React from 'react';
import MoreInfo from './MoreInfo';


export default class HogCard extends React.Component {
    constructor(){
        super()
        this.state = {
            moreInfoBool: false
        }
    }

    heartBoi = (e) => {
        if (e.target.innerText === '♡'){
            e.target.innerText = '♥'
        } else if (e.target.innerText === '♥'){
            e.target.innerText = '♡'
        }
    }

    slugger = () => {
        let names = this.props.hogData.name.split(" ")
        names = names.map(word=> {
            return word.toLowerCase()
        })
        let slugged = names.join('_')
        return slugged
    }

    moreInfoToggle = () => {
        this.setState(prevState => {
            return {
                moreInfoBool: !prevState.moreInfoBool
            }
        })
    }

    generateHog = () => {
        return(
            <div className="ui card">
                <div className="image">
                    <img src={require(`../hog-imgs/${this.slugger()}.jpg`)} />
                </div>
                <div>
                    <h1>{this.props.hogData.name}</h1>
                </div>
                <div className="image">
                </div>
                <div className="content">
                    <p>Specialty: {this.props.hogData.specialty}</p>
                    <button onClick={this.moreInfoToggle}>More Info</button><button>Hide Me</button>
                </div>
                { this.state.moreInfoBool ? <MoreInfo hogsData={this.props.hogData} /> : null}
                <div className="extra content">
                    <p onClick={this.heartBoi}>♡</p>
                </div>
            </div>
        )
    }

    render () {
        return (
            this.generateHog()
        )
    }
}
// ♥