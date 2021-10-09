import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
        return ( 
            <nav className="navbar navbar-expand-md bg-dark navbar-dark ml-1">
                {/* <!-- Brand --> */}
                <Link className="navbar-brand" to="/" >What happend</Link>
                {/* Collapsibe button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                {/* ml-auto moves nav items to the right */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* data-toggle="collapse" data-target=".navbar-collapse.show" for collapse navbar after click */}
                    <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">ITRODUCTION</Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">SOLUTION</Link>
                    </li> 
                    <li className="nav-item nav-item-3">
                    <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">RATE PLAN</Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">LOGIN</Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">APPLY FOR FREE USE</Link>
                    </li> 
                </ul>
                </div>
            </nav>
         );
}
 
export default NavBar;
