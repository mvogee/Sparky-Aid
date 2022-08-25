import React from "react";
import Nav from '../../components/nav/Nav';
import ContentSlider from "../../components/content-slider/ContentSlider";
const Home = () => {
    let item1 = {imgUrl: "http://matthewvogee.com/img/a-thumbnail.png", heading: "Image One", body: "body copy", cta: "call to action 1", ctaLink: "http://matthewvogee.com"};
    let item2 = {imgUrl: "http://matthewvogee.com/img/a-thumbnail.png", heading: "Image Two", body: "body copy", cta: null, ctaLink: null};
    let item3 = {imgUrl: "http://matthewvogee.com/img/a-thumbnail.png", heading: "Image Three", body: "body copy", cta: "do something", ctaLink: null};
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
            <ContentSlider content={[item1,item2,item3]} count={3}/>
        </div>
    );
}

export default Home;