import React from 'react';


export default class HogCard extends React.Component {

    heartBoi = (e) => {
        if (e.target.innerText === '♡'){
            e.target.innerText = '♥'
        } else if (e.target.innerText === '♥'){
            e.target.innerText = '♡'
        }
    }


    render () {
        return(
            <div className="ui card">
                <div className="image">
                    <img src={require("../hog-imgs/cherub.jpg")} />
                </div>
                <div>
                    <h1>Cherub</h1>
                </div>
                <div className="image">
                </div>
                <div className="content">
                    <p>Specialty:{}</p>
                    <button>More Info</button><button>Hide Me</button>
                </div>
                <div className="extra content">
                    <p onClick={this.heartBoi}>♡</p>
                </div>
            </div>
        )
    }
}
// ♥