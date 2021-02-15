import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 10px;
`;

const PricesPresenter = ({ result_list, loading, error }) =>
  loading
    ? "Loading..."
    : result_list.map((item) => (
        <Section>
          {item.coin_name} / {item.symbol}: ${item.price}
        </Section>
      ));

export default PricesPresenter;
