import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeCreate from './homes/HomeCreate';
import HomeDelete from './homes/HomeDelete';
import HomeDetails from './homes/HomeDetails';
import HomeEdit from './homes/HomeEdit';
import HomeList from './homes/HomeList';
import MortgageCalculator from './homes/MortgageCalculator';


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Route path='/' exact components={HomeList} />
            <Route path='/homes/new' components={HomeCreate}/>
            <Route path='/homes/edit' components={HomeEdit}/>
            <Route path='/homes/delete' components={HomeDelete}/>
            <Route path='/homes/details' components={HomeDetails}/>
            <Route path='/mortgagecalculator' components={MortgageCalculator}/>
            </BrowserRouter>
        </div>
    )
};

export default App;