import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => null

HomePresenter.PropTypes = {
        nowPlaying:PropTypes.arry,
        upcoming:PropTypes.arry,
        popular:PropTypes.arry,
        error:PropTypes.string,
        loading:PropTypes.bool.isRequired  
}

export default HomePresenter;