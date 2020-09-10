import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import Layout from './Employee/Layout';

ReactDOM.render(
        <Router>
            <Layout />
        </Router>
        , document.getElementById('root'));
