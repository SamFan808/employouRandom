import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
// const APIKEY = "";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
