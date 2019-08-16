import React, { Component } from 'react'
import MovieComp from './MovieComp'
export default class MovieInfo extends Component {
    render() {
        return this.props.movies.map((movie) =>(
            <MovieComp movie={movie} id={movie.id} delMovie={this.props.delMovie}></MovieComp>
        ))
    }
}
