import React,{useState} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default function EmployeeSearch(props){

    const [empName, setEmpName] = useState("");
    const [isError, setError] = useState(false);

    const updateEmpName = (event)=>{
        setEmpName(event.currentTarget.value);
    };

    const searchBtnClick = (event)=>{
        //console.log(empName);
        if(empName === "" || empName === null){
            setError(true);
        }else{
            props.history.push("/overview/"+empName.trim());    
        }    
    };

    const keyDownText = (event)=>{        
        if(event.keyCode===13){
            searchBtnClick();
        }    
    };

    return (
        <div className={"banner"}>
            <div className={"banner-txt"}>Employee Explorer</div>
            <div className={"input-container"}>
                <InputGroup style={{height:"45px",maxWidth:"450px"}}>
                    <Input  placeholder="Employee Name" style={{height:"45px"}} value={empName} 
                    onChange={updateEmpName}
                    onKeyDown={keyDownText}
                    />
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{backgroundColor:"#1c42ff",color:"#f3f3f3",cursor:'pointer'}} onClick={searchBtnClick}>Search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <div style={{color:"#b51b1b",display:isError?"block":"none",fontWeight: "bold"}}>Please enter the employee name</div>
            </div>      
            </div>
            );
}


