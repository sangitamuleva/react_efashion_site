import "./css/style.css";
// import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/meanmenu.min.css";
import './css/responsive.css';
import './css/settings.css';
import './css/settings1.css';
import { Route ,BrowserRouter,Switch} from 'react-router-dom'
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Layout} from './components/Layout';
import {Navsbar} from './components/Navsbar';
import Category from './models/Category';
import AddCategoryForm from './models/AddCategoryForm';
import CategoryUpdateDelete from './models/CategoryUpdateDelete';


function App() {
  return (
   <React.Fragment>
     <Layout>
       <Navsbar/>
     <BrowserRouter>
      <Switch>
        <Route path='/home' ><Home/></Route>
        <Route rxact path='/category/add' ><AddCategoryForm/></Route>
        <Route exact path='/category/:id' component={(props) => <CategoryUpdateDelete {...props} />} />
       
        <Route exact path='/category' ><Category/></Route>
        
        <Route path='/about'  ><About/></Route>
        <Route path='/contact' ><Contact/></Route>
      </Switch>
     </BrowserRouter>
     </Layout>
     
   </React.Fragment>
  );
}

export default App;
