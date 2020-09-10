import React from 'react';
import Header from './Header';
import EmployeeSearch from './EmployeeSearch';
import EmployeeOverview from './EmployeeOverview';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,withRouter,Switch} from 'react-router-dom';
import './employee.css';
function Layout(props){
    return <>
                <Header history={props.history}/>                
                    <Switch>
                        <Route exact  path="/"component={EmployeeSearch} />                     
                        <Route exact  path="/overview/:empName" component={EmployeeOverview} />                                             
                    </Switch>            
            </>
}
export default withRouter(Layout)