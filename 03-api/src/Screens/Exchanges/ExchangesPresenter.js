import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Name = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-bottom: 20px;
`;

const Url = styled.div``;

const ExchangesPresenter = ({ result_list, loading, error }) =>
  loading
    ? "Loading..."
    : result_list.map(
        (item) =>
          item.name &&
          item.description && (
            <Section>
              <Name>{item.name}</Name>
              <Description>
                {String(item.description).slice(0, 70)}...
              </Description>
              <Url></Url>
            </Section>
          )
      );

ExchangesPresenter.propTypes = {
  result_list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      link: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired)
      })
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired
};

export default ExchangesPresenter;
