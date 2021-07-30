import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";

//a dropdown menu that follows links that are routed in app.js
function DropdownMenu() {
    return (
        <>
            <DropdownButton className="drop" id="dropdown-item-button" title="Choose an Activity">
                <Link to="/currencyConverter"><Dropdown.Item as="button">Currency converter</Dropdown.Item></Link>
                <Link to="/cardGame"><Dropdown.Item as="button">Win!</Dropdown.Item></Link>
            </DropdownButton>
            <br />
        </>
    )
}

export default DropdownMenu;
