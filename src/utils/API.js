import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?results=12";

export default {
  search: function () {
    return axios.get("https://randomuser.me/api/?results=12").then((res) => {
      const employees = res.data;
      return employees.results.map((employee) => {
        return {
          firstName: employee.name.first,
          lastName: employee.name.last,
          picture: employee.picture,
          email: employee.email,
          address: employee.location,
          phone: employee.cell,
          birthday: employee.dob.date.slice(0, 10),
        };
      });
    });
  },
};

// import axios from "axios";
// const BASEURL = "https://randomuser.me/api/";
// // const APIKEY = "";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query);
//   },
// };
