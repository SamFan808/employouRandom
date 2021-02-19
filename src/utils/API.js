import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=30";

export default {
  search: function () {
    return axios.get(BASEURL).then((res) => {
      const employees = res.data;
      return employees.results.map((employee) => {
        return {
          id: employee.login.uuid.slice(0, 7),
          firstName: employee.name.first,
          lastName: employee.name.last,
          picture: employee.picture.large,
          email: employee.email,
          streetNum: employee.location.street.number,
          street: employee.location.street.name,
          city: employee.location.city,
          state: employee.location.state,
          postcode: employee.location.postcode,
          country: employee.location.country,
          phone: employee.cell,
          birthday: employee.dob.date.slice(0, 10),
        };
      });
    });
  },
};
