import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRulerCombined, faCalculator } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
                </li>
                <li>
                    <Link to="/conduit-bending"><FontAwesomeIcon icon={faRulerCombined} /></Link>
                </li>
                <li>
                    <Link to="/wire-sizing"><FontAwesomeIcon icon={faCalculator} /></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;