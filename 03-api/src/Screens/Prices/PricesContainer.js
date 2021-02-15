import React from "react";
import PricesPresenter from "./PricesPresenter";
import { pricesApi } from "../../api";

export default class extends React.Component {
  state = {
    result_list: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const { data: result } = await pricesApi.prices();
      const result_list = result.map((item) => ({
        coin_name: item.name,
        symbol: item.symbol,
        price: item.quotes.USD.price
      }));
      this.setState({
        result_list: result_list
      });
    } catch {
      this.setState({
        error: "Can't get Prices"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { result_list, loading, error } = this.state;
    return (
      <PricesPresenter
        result_list={result_list}
        loading={loading}
        error={error}
      />
    );
  }
}

/*
(1) / (Homepage) https://api.coinpaprika.com/v1/tickers
(2) /exchanges https://api.coinpaprika.com/v1/exchanges
(3) /coins https://api.coinpaprika.com/v1/coins
Homepage: Show the name of the coin, the symbol and price.
Exchanges: Show the name of the exchange, description and website link.
Coins: List the coins and sort them by rank.
*/
