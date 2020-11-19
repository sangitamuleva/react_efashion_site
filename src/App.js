import "./css/style.css";
// import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/meanmenu.min.css";
import "./css/responsive.css";
import "./css/settings.css";
import "./css/settings1.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Layout } from "./components/Layout";
import { Navsbar } from "./components/Navsbar";
import Category from "./models/Category";
import UserLogin from "./models/user/UserLogin";
import UserSignup from "./models/user/UserSignup";
import UserForgotPassword from "./models/user/UserForgotPassword";
import ResetPasswordConfirm from "./models/user/ResetPasswordConfirm";

import authStore from "./store/authStore";
import AddCategoryForm from "./models/AddCategoryForm";
import CategoryUpdateDelete from "./models/CategoryUpdateDelete";
import { Provider } from "react-redux";
import { history } from "./helpers/history";

const AppWrapper = () => {
	return (
		<Provider store={authStore}>
			<App />
		</Provider>
	);
};
function App() {
	return (
		<React.Fragment>
			<Layout>
				<Navsbar />
				<BrowserRouter history={history}>
					<Switch>
						<Route exact path="/category/add">
							<AddCategoryForm />
						</Route>
						<Route
							exact
							path="/category/:id"
							component={(props) => <CategoryUpdateDelete {...props} />}
						/>

						<Route exact path="/category">
							<Category />
						</Route>

						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/login">
							<UserLogin />
						</Route>
						<Route exact path="/signup">
							<UserSignup />
						</Route>
						<Route exact path="/forgot_password">
							<UserForgotPassword />
						</Route>
						<Route exact path="/reset_password">
							<ResetPasswordConfirm />
						</Route>
						<Route path={["/", "/home"]}>
							<Home />
						</Route>
					</Switch>
				</BrowserRouter>
			</Layout>
		</React.Fragment>
	);
}

export default AppWrapper;
