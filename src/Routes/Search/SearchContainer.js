import { movieApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter'

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "code",
        error: null,
        loading: false
    }

    componentDidMount(){
        this.handleSubmit();
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const {
                data:{ results: movieResults }
             } = await movieApi.search(searchTerm);
            const {
                data:{ results: showResults }
             }  = await tvApi.search(searchTerm);
            this.setState({ 
                movieResults, 
                showResults 
            })
        } catch {
            this.setState({ error: "Can't find results."});
        } finally {
            this.setState({ loading: false });
        }
    }

    render () {
        const { movieResults, tvResults, searchTerm, error, loading} = this.state;
        return ( 
            <SearchPresenter
                movieResults = {movieResults}
                tvResults = {tvResults}
                searchTerm = {searchTerm}
                error = {error}
                loading = {loading}
            />
        )
    }
}