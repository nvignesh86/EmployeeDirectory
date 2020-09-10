import React from 'react';
import Subordinates from './Subordinates';

export default function Employee(props){        
    const {emp} = props;
    return (
        <>
        <div style={{display:"flex",padding:"5px"}}>                       
            <div className={"emp-name "+emp.title}>{emp.name}</div>            
        </div>           
            {
               <Subordinates subordinates = {emp.subordinates} />
            }            
        </>
    );
}
