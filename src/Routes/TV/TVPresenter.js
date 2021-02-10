import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({topRated, airingToday, popular, error, loading}) => null

TVPresenter.PropTypes = {
        topRated:PropTypes.arry,
        airingToday:PropTypes.arry,
        popular:PropTypes.arry,
        error:PropTypes.string,
        loading:PropTypes.bool.isRequired  
}

export default TVPresenter;