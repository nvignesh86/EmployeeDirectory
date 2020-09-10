import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';
import Subordinates from './Subordinates';
import Constants from './../Utils/Constants';

export default function EmployeeTree(props){
    const [emptyMsg,setEmptyMsg] = useState(null);   
    const empTreeRoot = useRef();
    let empTreeData = {
        name :props.empName,
        subordinates:[]
    };
    let empList = [props.empName];

    const formatEmpTreeData=(empData,resp)=>{
        empData.title = resp[0];        
        if(resp.length>1 && resp[1]["direct-subordinates"]!=null){
            resp[1]["direct-subordinates"].forEach((name)=>{       
                if(!empList.includes(name)){        
                    empData.subordinates.push({name:name,subordinates:[]});             
                    empList.push(name)        ;
                } 
            });
        }    
    };

    const getSubordinate =(empData)=>{        
        let url = Constants.GET_EMPLOYEE_SUBORDINATES+empData.name;       
            fetch(url)
                .then(function(response) {
                    return response.json();                
                }).then(function(resp) {                   
                    if(resp!=null && resp.length>0){
                        formatEmpTreeData(empData,resp);   
                        if(empData.subordinates!=null && empData.subordinates.length > 0){
                            empData.subordinates.forEach((empD)=>{
                                getSubordinate(empD);
                            });
                        }                    
                        ReactDOM.render(<Subordinates subordinates = {empTreeData.subordinates} />,empTreeRoot.current);
                    }else{                    
                        setEmptyMsg(empData.name+" is not valid employee");                              
                    }                                
                }).catch(function(ex) {  
                    console.log('parsing failed', ex)
                });
        }; 


    useEffect(()=>{        
        getSubordinate(empTreeData);            
    });

    return <div ref={empTreeRoot}>{emptyMsg}</div>

}