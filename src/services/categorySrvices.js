import http from "../http_common";

const getAll = () => {
  return http.get("");
};

const get = id => {
  return http.get(`${id}`);
};

const create = data => {
  return http.post("create/", data);
};

const update = (id, data) => {
  return http.post(`update/${id}/`, data);
};

const remove = id => {
  return http.delete(`delete/${id}/`);
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