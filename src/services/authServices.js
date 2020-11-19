import http from "../http_common";

const register = (data) => {
	return http.post("user/register/", data);
};

const forgot_password = (data) => {
	return http.post("user/password_reset/", data);
};

const reset_password = (data) => {
	return http.post("user/password_reset/confirm/", data);
};

const login = (data) => {
	return http.post("user/login/", data).then((response) => {
		if (response.data.token) {
			localStorage.setItem("user", JSON.stringify(response.data));
		}

		return response.data;
	});
};

const logout = () => {
	localStorage.removeItem("user");
};

export default {
	register,
	login,
	logout,
	forgot_password,
	reset_password,
};
