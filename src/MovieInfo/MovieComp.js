import React, { Component } from 'react'
import CommentBox from './CommentBox'

export default class MovieComp extends Component {

    state = {
        
        messages: [ {
            message: "wow a good day"
        }
    ]
    }


    addMessage = (message) => {

        
       const newMessage = {
           message: message
       }

       this.setState({
           messages:[newMessage, ...this.state.messages]
       })
    }




    render() {
        
        return (
            <div >
                <p style={{border:'solid',
                padding:'10px'
                }}>
                <button 
               style={btnStyle} onClick={this.props.delMovie.bind(this, this.props.id)}>x</button>
                <h3>{this.props.movie.title}</h3>
                <img src={this.props.movie.image} style={{width:'120px'}}></img>
                <p>{this.props.movie.info}</p>

                <CommentBox comment={this.state.messages} movieid = {this.props.id} addMessage={this.addMessage}></CommentBox>
                </p>
            </div>
        )
    }
    
}
const btnStyle = {
    backgroundColor:'	#B22222'

}