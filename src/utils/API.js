import axios from "axios";
const BASEURL = "https://randomapi.com/api/";
const APIKEY = "6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
