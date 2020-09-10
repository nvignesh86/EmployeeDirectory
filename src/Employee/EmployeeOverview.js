import React from 'react';
import EmployeeTree from './EmployeeTree';

export default function EmployeeOverview(props){
    return (<>
            <div className={"overview-banner"}>                
                <div className={"banner-txt"}>Employee Overview</div>                
                <div className={"overview-txt"}>Subordinates of employee {props.match.params.empName}</div>                
            </div>           
            <div className="emp-tree"> 
                <EmployeeTree empName={props.match.params.empName} />
           </div>         
          </>
    );
}