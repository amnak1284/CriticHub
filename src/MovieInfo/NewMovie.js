import React, { Component } from 'react'

export default class NewMovie extends Component {


    state= {
        title:'',
        info:'',
        image:''
    }
    onChange= (e) =>{
    this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state.title, this.state.image, this.state.info );
    }


    render() {

        return (
            <div>
                <form onSubmit= {this.onSubmit}>
                    <input name='title' type="text" placeholder="movie Name" onChange={this.onChange}></input>
                    <input name='image'type="text" placeholder="movie poster" onChange={this.onChange}></input>
                    <input name='info' type="text" placeholder="movie information" onChange={this.onChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
