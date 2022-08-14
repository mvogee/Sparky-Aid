import React from "react";
import Nav from '../../components/nav/Nav';
const Home = () => {
    return(
        <div className="home">
            <Nav />
            <div className="Welcome">
                <h1>Welcome to Sparky Aid</h1>
                <h2>An Electricians best friend.</h2>
                <p>The electrician already has a hard job. Sparky aids goal 
                    is to make that job just a little bit easier by freeing up your 
                    brain power to solving the problems that take creativity. 
                    Pipe bending calculations, wire sizing, bla bla. We got you 
                    covered. So get back to doing work and let us do the 
                    calculating! Be safe out there.</p>
            </div>
        </div>
    );
}

export default Home;