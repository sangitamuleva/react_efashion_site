// based on the response dfined actions
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
	EMAIL_FAIL,
	EMAIL_SUCCESS,
	PASSWORD_CHANGE_FAIL,
	PASSWORD_CHANGE_SUCCESS,
} from "./types";

import AuthService from "../services/authServices";

export const register = (data) => (dispatch) => {
	return AuthService.register(data).then(
		(response) => {
			// console.log(response)
			dispatch({
				type: REGISTER_SUCCESS,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: response.data.message,
			});

			return Promise.resolve();
		},
		(error) => {
			// console.log(error.response.data.username);
			let message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			if (error.response.data.username) {
				message = error.response.data.username[0].toString();
			}
			if (error.response.data.password) {
				message = error.response.data.password[0].toString();
			}
			if (error.response.data.email) {
				message = error.response.data.email[0].toString();
			}

			dispatch({
				type: REGISTER_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		}
	);
};

export const login = (data) => (dispatch) => {
	return AuthService.login(data).then(
		(response) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: response },
			});

			return Promise.resolve();
		},
		(error) => {
			let message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			if (error.response.data.username) {
				message = error.response.data.username[0].toString();
			}
			if (error.response.data.password) {
				message = error.response.data.password[0].toString();
			}
			dispatch({
				type: LOGIN_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		}
	);
};

export const forgot_password = (data) => (dispatch) => {
	return AuthService.forgot_password(data).then(
		(response) => {
			let message = "";
			if (response.status === 200) {
				message = "Email sent successfully!!";
			}
			dispatch({
				type: EMAIL_SUCCESS,
				// payload: { user: response },
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.resolve();
		},
		(error) => {
			console.log(error.response);
			let message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			if (error.response.data.email) {
				message = error.response.data.email[0];
			}
			dispatch({
				type: EMAIL_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		}
	);
};

export const reset_password = (data) => (dispatch) => {
	return AuthService.reset_password(data).then(
		(response) => {
			let message = "";
			if (response.status === 200) {
				message = "Password Updated!!";
			}

			dispatch({
				type: PASSWORD_CHANGE_SUCCESS,
				// payload: { user: response },
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.resolve();
		},
		(error) => {
			console.log(error.response);
			let message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			if (error.response.data.token) {
				message = error.response.data.token[0];
			}
			if (error.response.data.password) {
				message = error.response.data.password[0];
			}
			dispatch({
				type: PASSWORD_CHANGE_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		}
	);
};

export const logout = () => (dispatch) => {
	AuthService.logout();

	dispatch({
		type: LOGOUT,
	});
};
