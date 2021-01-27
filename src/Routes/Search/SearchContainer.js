import React from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi } from 'api';
import { tvApi } from 'api';

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    async componentDidMount() {
        try{
            const search = await movieApi.search('love')
            console.log(search)

        } catch {
            this.setState({
                error: "Can't find search information."
            })
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render () {
        const { movieResults, tvResults, searchTerm, error, loading} = this.state;
        console.log(this.setState)
        return ( 
            <SearchPresenter 
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
            />
        )
    }
}