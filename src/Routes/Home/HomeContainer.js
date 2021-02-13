import React from 'react';
import HomePresenter from './HomePresenter'
import { movieApi } from 'api';

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        try{
            const {
                data: {results: nowPlaying}
            } = await movieApi.nowPlaying();
            const {
                data: {results: upcoming}
            } = await movieApi.upcoming();
            const {
                data: {results: popular}
            } = await movieApi.popular();

            //자바스크립트에서 'nowPlaying: nowPlaying' 과 'nowPlaying'는 같은 의미
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        } catch{
            this.setState({
                error: "Can't find movie information."
            });
        } finally{
            this.setState({
                loading: false
            });
        }
    }

    render () {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log(nowPlaying)
        return ( 
            <HomePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}