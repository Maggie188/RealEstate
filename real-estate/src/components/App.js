import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeCreate from './homes/HomeCreate';
import HomeDelete from './homes/HomeDelete';
import HomeDetails from './homes/HomeDetails';
import HomeEdit from './homes/HomeEdit';
import HomeList from './homes/HomeList';
import MortgageCalculator from './homes/MortgageCalculator';
import Header from './header';


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={HomeList} />
                <Route path='/homes/new' exact component={HomeCreate} />
                <Route path='/homes/edit' exact component={HomeEdit} />
                <Route path='/homes/delete' exact component={HomeDelete} />
                <Route path='/homes/details' exact component={HomeDetails} />
                <Route path='/mortgagecalculator' exact component={MortgageCalculator} />
            </BrowserRouter>
        </div>
    )
};

export default App;