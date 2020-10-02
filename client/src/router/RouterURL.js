import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPage from '../components/adminPage/AdminPage';
import LogIn from '../components/logInPage/LogInPage';
import ListProduct from '../components/productPage/ListProduct';
import ProductDetail from '../components/productPage/ProductDetail';
import SignUp from '../components/signUpPage/SignUpPage';
import UploadPage from '../components/uploadPage/UploadPage';


const RouterURL = props => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path='/' component={HomePage}/> */}
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route exact path='/admin' component={AdminPage}/>
                <Route exact path='/mobile' component={ListProduct}/>
                <Route exact path='/:category/:branch/:id' component={ProductDetail}/>
                <Route exact path='/upload' component={UploadPage}/>
            </Switch>
        </Router>
    );
};
export default RouterURL;