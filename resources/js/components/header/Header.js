import React, {memo} from 'react'
import {Link} from "react-router-dom";

const Header = memo((props) => (
    <header className="navbar">
        <div className="navbar-item"><Link to="/">home</Link></div>
    </header>
));


export default Header;
