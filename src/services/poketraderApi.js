import axios from 'axios';

const SERVER_URL = process.env.VUE_APP_POKETRADER_API_URL;  
  
const poketraderApi = axios.create({  
  baseURL: SERVER_URL
});

export default {
  newPokemon: (name) => {
    return poketraderApi.post(`/pokemon?name=${name}`);
  },
  newTrade: (tradeCommand) => {
    return poketraderApi.post(`/trade`, tradeCommand);
  },
  getTrades: () => {
    return poketraderApi.get(`/trades`);
  }
}