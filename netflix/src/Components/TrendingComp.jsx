import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CardImg from './Cardimg';
import { Key, POTTER } from '../data';



export default class MyTrending extends Component {

  state = {
    movies: [],
};

componentDidMount() {
    fetch(Key + POTTER)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search.map((movie) => movie.Poster) }))
        .catch((error) => console.log(error));
}

render() {
  console.log(this.state.movies)
  return (
    <div>
      <h4 className='px-4'>Harry Potter</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <div>
           <CardImg movies={this.state.movies} />
           </div>
      </Container>
    </div>
  );
}
  
};