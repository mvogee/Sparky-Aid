import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRulerCombined, faCalculator } from '@fortawesome/free-solid-svg-icons'
import "./nav.css";

type AppProps = {
    pageId: number;
}

const Nav = (props: AppProps) => {
    return (
        <nav className="navigation">
            <div className="nav-wrapper">
                <ul>
                    <li>
                        <Link to="/" ><FontAwesomeIcon icon={faHouse} className={props.pageId === 1 ? "current-page" : ""}/></Link>
                    </li>
                    <li>
                        <Link to="/conduit-bending"><FontAwesomeIcon icon={faRulerCombined} className={props.pageId === 2 ? "current-page" : ""}/></Link>
                    </li>
                    <li>
                        <Link to="/wire-sizing"><FontAwesomeIcon icon={faCalculator} className={props.pageId === 3 ? "current-page" : ""}/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;