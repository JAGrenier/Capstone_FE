import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList';
import { RestaurantsContext, RestaurantsContextProvider } from './Context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import UpdatePage from './routes/UpdatePage';


const App = () => {
    return( 
        <RestaurantsContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route  path="/restaurants:id/update" component={UpdatePage} />
                        <Route  path="/restaurants:id" component={RestaurantDetailsPage} />
                    </Switch>    
                </Router>
            </div>
        </RestaurantsContextProvider>
)};

export default App;