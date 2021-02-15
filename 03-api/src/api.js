import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const pricesApi = {
  prices: () => api.get("tickers")
};

export const exchangesApi = {
  exchanges: () => api.get("exchanges")
};

export const coinsApi = {
  coins: () => api.get("coins")
};

export const CoinDetailApi = {
  coinDetail: id  => api.get(`coins/${id}`)
}