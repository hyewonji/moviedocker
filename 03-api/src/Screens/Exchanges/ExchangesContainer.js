import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesApi } from "../../api";

export default class extends React.Component {
  state = {
    result_list: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: result } = await exchangesApi.exchanges();
      const result_list = result.map((item) => ({
        name: item.name,
        description: item.description,
        link: item.links
      }));
      this.setState({ result_list });
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result_list, loading, error } = this.state;
    console.log(this.state);
    return (
      <ExchangesPresenter
        result_list={result_list}
        loading={loading}
        error={error}
      />
    );
  }
}
