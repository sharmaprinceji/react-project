import {Header} from "./Header";
import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import'./App.css';

export function Header() {
    const navigate=useNavigate();

    const logout =() =>{
        localStorage.clear('user-name');
        navigate('/login');
    };
    return(
        <>
        
        </>
    )
}