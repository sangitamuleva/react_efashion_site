import http from "../http_common";

const getAll = () => {
  return http.get("category/");
};

const get = id => {
  return http.get(`category/${id}`);
};

const create = data => {
  return http.post("category/create/", data);
};

const update = (id, data) => {
  return http.post(`category/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`category/delete/${id}/`);
};

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
  getAll,
  get,
  create,
  update,
  remove
};