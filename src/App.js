import React, { Component } from 'react';
import MovieInfo from './MovieInfo/MovieInfo.js';
import './App.css';
import NewMovie from './MovieInfo/NewMovie'
import uuid from 'uuid';

class App extends Component {
 state = {
movies: [

  {
    id:uuid.v4(),
    title:"nightmare before cristmas",
  info:"movie about christmas",
    image:"https://upload.wikimedia.org/wikipedia/en/9/9a/The_nightmare_before_christmas_poster.jpg"},

  {
    id:uuid.v4(),
    title:"train to busan", 
  info:"movie about zombies", 
   image:"//upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg"
  }
]
}


delMovie = (id) => {
  this.setState({movies: [...this.state.movies.filter(movie => movie.id !== id)]})
}

addMovie = (title, image, info) => {
const newMovie = {
  id: uuid.v4(),
  title : title,
  image: image,
  info: info
}


this.setState({
  movies: [newMovie, ...this.state.movies]
});

}

  render() {
    return (
      <div className="App">
        <h1 style={{fontSize:'50px', color:'#722f37'}}>CriticHub </h1>
        <NewMovie addMovie = {this.addMovie}/>
       <MovieInfo movies={this.state.movies} delMovie={this.delMovie}></MovieInfo>

       <a href="https://www.w3schools.com">W3Schools</a>
      </div>
    );
  }
}

export default App;
