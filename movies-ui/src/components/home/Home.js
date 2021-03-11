import React, { Component, useState } from 'react'
import { Container } from 'semantic-ui-react'
import { handleLogError } from '../misc/Helpers'
import { moviesApi } from '../misc/MoviesApi'
import MovieList from './MovieList'
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import 'primeflex/primeflex.css';

class Home extends Component {
  state = {
    isLoading: false,
    movies: []
  }

  setDate1(value){
    console.log(value);
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      const response = await moviesApi.getMovies()
      const movies = response.data
      this.setState({ movies, isLoading: false })
    } catch (error) {
      handleLogError(error)
    }
  }

  render() {
    const { isLoading, movies, date1 } = this.state
    return (
      isLoading ? <></> : (
        <Container>
          <div>
            <div className="card">
              <h5>Popup</h5>
              <div className="p-fluid p-grid p-formgrid">
                  <div className="p-field p-col-12 p-md-4">
                      <label htmlFor="basic">Basic</label>
                      <Calendar id="basic" value={date1} onChange={(e) => this.setDate1(e.value)} />
                  </div>
              </div>
            </div>
          </div>
          <MovieList movies={movies} />
        </Container>
      )
    )
  }
}

export default Home