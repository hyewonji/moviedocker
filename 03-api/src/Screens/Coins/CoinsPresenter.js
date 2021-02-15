import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Section = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Rank = styled.span`
    font-weight: 600;
    margin-right: 20px;
`
const Data = styled.span``


const CoinPresenter = ({ coin_list, error, loading }) => 
    loading 
    ? "Loading..."
    : coin_list.map(item => (
        item.rank && (
            <Link >
                <Section>
                    <Rank>#{item.rank} </Rank>
                    <Data> {item.name}/{item.symbol} →</Data>
                </Section>
            </Link>
        )
    ))

CoinPresenter.prototype = {
    coin_list : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error : PropTypes.string
}



export default CoinPresenter