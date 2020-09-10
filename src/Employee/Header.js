import React,{useCallback} from 'react';

export default function Headers(props){

    const homePage=useCallback(()=>{
        props.history.push("/");
    },[props.history]);

    return <div className={"header"}><i className="fas fa-home header-home" onClick={homePage}></i><span className={"header-title"} onClick={homePage}>Employee Directory</span></div>
}