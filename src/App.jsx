import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import RestaurantList from './components/RestaurantList';
import { RestaurantsContextProvider } from './Context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import UpdatePage from './routes/UpdatePage';
import "./App.css"
import RestaurantShow from './routes/RestaurantShow';


const App = () => {
    return( 
        <RestaurantsContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/restaurants" component={RestaurantShow} />
                        <Route  path="/restaurants/:id" component={RestaurantDetailsPage} />
                        <Route  path="/restaurants/:id/update" component={UpdatePage} />
                    </Switch>    
                </Router>
            </div>
        </RestaurantsContextProvider>
)};

export default App;