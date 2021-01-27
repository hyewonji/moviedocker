import React from 'react';
import SearchPresenter from './SearchPresenter'

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTern: "",
        error: null,
        loading: false
    }

    render () {
        const { movieResults, tvResults, searchTern, error, loading} = this.state;
        return ( 
            <SearchPresenter 
                movieResults={movieResults}
                tvResults={tvResults}
                searchTern={searchTern}
                error={error}
                loading={loading}
            />
        )
    }
}