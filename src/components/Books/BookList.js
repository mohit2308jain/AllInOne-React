import React from 'react';
import { connect } from 'react-redux';

import { fetchMoviesWithDetails } from '../../redux/ActionCreater';

import SearchBar from '../SearchBar';
import MovieCard from './BookCard';

const mapStateToProps = (state) => {
    return {
        movielist: state.movielist
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchMovies: (term) => {
            return dispatch(fetchMoviesWithDetails(term));
        }
    })
}

class MovieList extends React.Component{

    onSearch = (term) => {
        this.props.fetchMovies(term);
    }

    render(){
        console.log(this.props.movielist);
        const { isLoading, errMess, movies } = this.props.movielist;
        let showCards;
        if(isLoading){
            showCards = <h1>Loading...</h1>
        }
        else if(errMess){
            console.log(errMess);
            showCards = (
                <p>Couldn't find any movie. Please search again using another search criteria.</p>
            )
        }
        else{
            showCards = movies.map((movie) => {
                return(
                    <div>
                        <MovieCard movie={movie} key={movie.imdbID} />
                    </div>
                )
            })
        }
             
        return(
            <React.Fragment>
                <div className="container">
                <SearchBar onInput={(term) => this.onSearch(term)} />
                <hr />
                {showCards}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);