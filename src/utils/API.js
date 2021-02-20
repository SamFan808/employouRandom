import axios from "axios";
const BASEURL = "https://randomuser.me/api/?nat=fr&results=100";

export default {
  search: function () {
    return axios.get(BASEURL).then((res) => {
      const employees = res.data;
      return employees.results.map((data) => {
        return {
          id: data.login.uuid,
          firstName: data.name.first,
          lastName: data.name.last,
          picture: data.picture.medium,
          email: data.email,
          streetNum: data.location.street.number,
          street: data.location.street.name,
          city: data.location.city,
          state: data.location.state,
          postcode: data.location.postcode,
          country: data.location.country,
          phone: data.cell,
          birthday: data.dob.date.slice(0, 10),
        };
      });
    });
  },
};
