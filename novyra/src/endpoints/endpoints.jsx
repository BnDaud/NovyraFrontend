const BASEURL = "http://localhost:8000/api";

export const API = {
  gettotal: () => `${BASEURL}/gettotal?format=json`,

  users: (arg = "") => `${BASEURL}/user${arg && "/" + arg}/?format=json`,

  portfolio: (arg = "") =>
    `${BASEURL}/portfolio${arg && "/" + arg}/?format=json`,

  blogs: (arg = "") => `${BASEURL}/blogs${arg && "/" + arg}/?format=json`,
};
