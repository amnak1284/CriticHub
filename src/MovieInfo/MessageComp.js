import React, { Component } from 'react'

export default class MessageComp extends Component {
    render() {
        return (
            <div>
                <p>{this.props.mess.message}</p>
            </div>
        )
    }
}
