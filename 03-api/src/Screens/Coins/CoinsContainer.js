import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsApi } from "../../api";

export default class extends React.Component {
  state = {
    coin_list: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: result } = await coinsApi.coins();
      const coin_list = result.map(item => ({
        id : item.id,
        rank: item.rank,
        name: item.name,
        symbol: item.symbol
      }))
      this.setState({ coin_list })
    } catch {
      this.setState({ error: "Can't get Coins " });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { coin_list, error, loading } = this.state;
    console.log(this.state)
    return (
      <CoinsPresenter coin_list={coin_list} error={error} loading={loading} />
    );
  }
}
