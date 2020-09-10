import React from 'react';
import Employee from './Employee';

export default function Subordinates(props){
    const {subordinates}  = props;
    return ( 
        subordinates !=null &&
        <div style={{paddingLeft:"30px"}}>
        {
             subordinates.map((subordinate)=>{
                return <div key={subordinate.name}><Employee emp={subordinate} empList={props.empList} /></div>;
            })
        }
    </div>
    );
}
