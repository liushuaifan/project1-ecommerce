import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import './style/notfound.css';

export default function NotFound(){
    return(
        <div className="notfound">
            <p>Oops, something went wrong</p>
             <Link to="/" style={{}}>Go Home</Link> 
        </div>
    )
}