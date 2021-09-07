import React from 'react';
import { Router, Route } from 'react-router-dom';
import HomeCreate from './homes/HomeCreate';
import HomeDelete from './homes/HomeDelete';
import HomeDetails from './homes/HomeDetails';
import HomeEdit from './homes/HomeEdit';
import HomeList from './homes/HomeList';
import MonthlyCost from './homes/MonthlyCost';
import Header from './header';
import history from '../history';


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path='/' exact component={HomeList} />
                <Route path='/homes/new' exact component={HomeCreate} />
                <Route path='/homes/edit/:id' exact component={HomeEdit} />
                <Route path='/homes/delete/:id' exact component={HomeDelete} />
                <Route path='/homes/details/:id' exact component={HomeDetails} />
                <Route path='/homes/monthlycost/:id' exact component={MonthlyCost} />
            </Router>
        </div>
    )
};

export default App;