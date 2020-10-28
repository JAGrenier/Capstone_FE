import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import UpdatePage from './routes/UpdatePage';


const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/restaurants:id/update" component={UpdatePage} />
                <Route  path="/restaurants:id" component={RestaurantDetailsPage} />
            </Switch>    
        </Router>
    </div>
};

export default App;