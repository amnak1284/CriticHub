import React, { Component } from 'react'
import MessageComp from './MessageComp';

export default class CommentBox extends Component {

state = {
    message: ''
}

onChange = (e) => {
this.setState({[e.target.name]: e.target.value})
}
onSubmit = (e) => {
   e.preventDefault();
   this.props.addMessage(this.state.message)
   this.setState({message:''})


}
    
        
    render() {
        return (
            <div>
                <p>{this.props.comment.map(mess => <MessageComp mess={mess}></MessageComp>)}</p>

                <form onSubmit={this.onSubmit}>
                    <input type='text' name= 'message'placeholder='enter a comment' onChange={this.onChange}></input>
                    <input type='submit'  />
                </form>
            </div>
        )
    }
}
