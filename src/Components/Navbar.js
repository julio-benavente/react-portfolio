import React, { Component } from 'react'
import './Navbar.scss';
import {Link, NavLink} from 'react-router-dom';

export class Navbar extends Component {

    
    render() {
        
        const {navWidth, setNavWidth} = this.props 

        return (
            <div className = "navBar">
                <ul className="navLinks">
                    <NavLink exact 
                        className="navLink" 
                        activeClassName="active" 
                        to="/"
                        onClick={setNavWidth('long')}
                        ><span>|</span><li>Home</li></NavLink>
                    <NavLink 
                        className="navLink" 
                        activeClassName="active" 
                        to="/about"
                        onClick={setNavWidth('short')}
                        ><span>|</span><li>About Me & Skills</li></NavLink>
                    <NavLink 
                        className="navLink" 
                        activeClassName="active" 
                        to="/project"
                        onClick={setNavWidth('short')}
                        ><span>|</span><li>Projects</li></NavLink>
                    <NavLink 
                        className="navLink" 
                        activeClassName="active" 
                        to="/contact"
                        onClick={setNavWidth('short')}
                        ><span>|</span><li>Contact</li></NavLink>
                </ul>

                <div className="nameProfession">
                    <h1 className="name">Julio B.</h1>
                    <h4 className="profession">Web Developer</h4>
                </div>
            </div>
        )
    }
}

export default Navbar