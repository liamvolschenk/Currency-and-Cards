import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

//the quit button, linked back to the home page

export default function Quit() {
    return (
        <div>
           <Link to="/"><Button variant="danger">Quit</Button></Link>
        </div>
    )
}
