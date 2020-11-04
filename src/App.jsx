import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RestaurantsContextProvider } from './Context/RestaurantsContext';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
// import UpdatePage from './routes/UpdatePage';
import "./App.css"
import RestaurantShow from './routes/RestaurantShow';
import { AuthProvider } from './Context/auth';
import PrivateRoute from './PrivateRoute';


const App = () => {
    return( 
        <AuthProvider>
            <RestaurantsContextProvider>
                <div className="container">
                    <Router>
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <Route exact path="/SignUp" component={SignUp} />
                            <Route exact path="/Login" component={Login} />
                            <Route exact path="/restaurants" component={RestaurantShow} />
                            <Route  path="/restaurants/:id" component={RestaurantDetailsPage} />
                            {/* <Route  path="/restaurants/:id/update" component={UpdatePage} /> */}
                        </Switch>    
                    </Router>
                </div>
            </RestaurantsContextProvider>
        </AuthProvider>    
)};

export default App;