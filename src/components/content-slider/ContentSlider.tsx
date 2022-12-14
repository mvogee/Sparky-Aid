import { EventHandler } from "react";
import "./ContentSlider.css";


type AppProps = {
    content: {
        imgUrl: string;
        heading: string | null;
        body: string | null;
        cta: string | null;
        ctaLink: string | null;
    }[];
    count: number;
}
const images = (content: {
    imgUrl: string;
    heading: string | null;
    body: string | null;
    cta: string | null;
    ctaLink: string | null;
    }, key: number) => {
        return (
            <div key={key} className="content-container">
                <img className="content-img" src={content.imgUrl} alt="slider"/>
                <div className="content-cta">
                    <h2>{content.heading}</h2>
                </div>
                <div className="content-body">
                    <p>{content.body}</p>
                </div>
                <div className="content-cta">
                    <a href={content.ctaLink ? content.ctaLink : ""} className="cta-btn">{content.cta}</a>
                </div>
            </div>
    );
};

const bubbleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.getAttribute("data-idx"));
    // whenever the bubble is clicked make the slider scroll to the given position for the associated image.
}

const controlBubbles = (val: undefined, idx: number) => {
    return (
        <div key={idx} id={"bubble-" + idx.toString()} className="controlBubble" onClick={bubbleClick} data-idx={idx.toString()}></div>
    );
};

const ContentSlider = (props: AppProps) => {
    
    return (
        <div className="content-slider">
            <div className="content-wrapper">
                {props.content ? props.content.map(images) : null}
            </div>
            

            <div className="sliderControl">
                {props.count ? [...Array(props.count)].map(controlBubbles) : null}
            </div>
        </div>
    );
};

export default ContentSlider;