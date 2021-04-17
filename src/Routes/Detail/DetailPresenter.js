import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import ReactPlayer from 'react-player';


const Container = styled.div`
        height: calc(100vh - 50px);
        width: 100%;
        position: relative;
        padding: 50px;
`

const Backdrop = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.bgImage});
        background-position: center center;
        background-size: cover;
        filter: blur(3px);
        opacity:0.5;
        z-index: 0;
`

const Content = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
`;

const Cover = styled.div`
        width: 30%;
        height: 100%;
        background-image: url(${props => props.bgImage});
        background-position: center center;
        background-size: cover;
        border-radius: 5px;

`;

const Data = styled.div`
        width: 70%;
        margin-left: 30px;
`;

const Title = styled.h1`
        font-size: 32px; 
`;

const ItemContainer = styled.div`
        margin: 20px 0 ;
`;

const Item = styled.span`
        line-height: 1.5;
`;

const Divider = styled.span`
        margin: 0 10px;
`;

const Overview = styled.p`
        margin-bottom: 50px;
        font-size: 12px;
        opacity: 0.7;
        line-height: 1.5;
        width: 70%;
`;

const DetailContainer = styled.div`
        display: flex;
        flex-direction: column;
        color: #c6c6c6;
        margin-bottom: 20px;
`

const Imdb = styled.a``

const ContentContainer = styled.div`
        display: flex;
`

const VideoPlayer = styled(ReactPlayer)`
        margin-bottom: 20px;
        margin-right: 50px;
`

const CollectionContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #c6c6c6;
`

const Collection = styled.div`
        width: 150px;
        height: 270px;
        background-image: url(${props => props.bgImage});
        background-position: center center;
        background-size: cover;
        border-radius: 5px;
        margin-bottom:5px;
`

function DetailPresenter ({result, error, loading, location: { pathname }}){
        
        return(
                loading ? (
                        <>
                                <Helmet>
                                        <title>Loading | MD</title>
                                </Helmet>
                                <Loader />
                        </>
                ) : (
                <Container> 
                        <Helmet>
                                <link rel='icon' href="https://img.icons8.com/pastel-glyph/2x/movie-beginning.png" />
                                <title>
                                        {result.original_title 
                                        ? result.original_title 
                                        : result.original_name }
                                </title>
                        </Helmet>
                        <Backdrop 
                                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} 
                        />
                        <Content>
                                <Cover 
                                        bgImage={
                                                result.poster_path 
                                                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                                                : require("assets/noPosterSmall.png")
                                        } 
                                />
                                <Data>
                                        <Title>
                                                {result.original_title 
                                                ? result.original_title 
                                                : result.original_name }
                                        </Title>
                                        <ItemContainer>
                                                <Item>
                                                        {result.release_date 
                                                        ? result.release_date.substring(0,4)
                                                        : result.first_air_date.substring(0,4) }
                                                </Item>
                                                <Divider>•</Divider>
                                                <Item>
                                                        {result.runtime
                                                        ? result.runtime
                                                        : result.episode_run_time[0]} min
                                                </Item>
                                                <Divider>•</Divider>
                                                <Item>
                                                        {result.genres && result.genres.map((genre, index) => index === result.genres.length -1 ? genre.name : `${genre.name}/`)}
                                                </Item>
                                        </ItemContainer>
                                        <Overview>
                                                {result.overview}
                                        </Overview>
                                        <DetailContainer>
                                                <Imdb href={`https://www.imdb.com/title/${result.imdb_id}`}>
                                                        <img src="https://img.icons8.com/color/45/000000/imdb.png" alt=""/>
                                                </Imdb>
                                                <Item>
                                                        Production Companies : {result.production_companies && result.production_companies.map((company, index) => index === result.production_companies.length -1 ? company.name : `${company.name}, `)}
                                                </Item>
                                                <Item>
                                                        Production Countries : {result.production_countries && result.production_countries.map((country, index) => index === result.production_countries.length -1 ? country.name : `${country.name}, `)}
                                                </Item>
                                        </DetailContainer>
                                        <ContentContainer>
                                                {result.videos.results.length > 0 
                                                ? (
                                                        <VideoPlayer 
                                                                width='480px' 
                                                                height='270px' 
                                                                url={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
                                                                controls
                                                        />
                                                ) : 'Video is not exist'}
                                                {pathname.includes('movie') && result.belongs_to_collection 
                                                ? (
                                                        <CollectionContainer>
                                                                <a href={`https://www.themoviedb.org/movie/${result.belongs_to_collection.id}`}> 
                                                                        <Collection bgImage={`http://image.tmdb.org/t/p/w300${result.belongs_to_collection.poster_path}`} />
                                                                </a>
                                                                Collection
                                                        </CollectionContainer>
                                                ) : 'Collection is not exist'}
                                        </ContentContainer>
                                </Data>
                        </Content> 
                </Container>
                )
        ) 
        
}

DetailPresenter.propTypes = {
        result:PropTypes.array,
        error:PropTypes.string, 
        loading:PropTypes.bool.isRequired  
}

export default withRouter(DetailPresenter);