import http from "../http_common";
import authHeader from "./authHeaders";

const getAll = () => {
	return http.get("category/", { headers: authHeader() });
};

const get = (id) => {
	return http.get(`category/${id}`, { headers: authHeader() });
};

const create = (data) => {
	return http.post("category/create/", data, { headers: authHeader() });
};

const update = (id, data) => {
	return http.post(`category/update/${id}/`, data, { headers: authHeader() });
};

const remove = (id) => {
	return http.delete(`category/delete/${id}/`, { headers: authHeader() });
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
	remove,
};
