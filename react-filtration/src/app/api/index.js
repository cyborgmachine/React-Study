import * as users from "./fake.api/user.api";
import { fetchAll } from "./fake.api/professions.api";
const API = {
  users,
  professions: {
    fetchAll,
  },
};
export default API;
