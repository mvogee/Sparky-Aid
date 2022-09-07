import React from "react";
import { useState } from "react";

type AppProps = {
    conduitSize: string;
    conduitType: string;
}

const getTakeup = (size: string, type: string) => {
    let takeup = 0;
    switch (size) {
        case "1/2":
            takeup = (type === "EMT" ? 5 : 6);
            break;
        case "3/4":
            takeup = (type === "EMT" ? 6 : 8);
            break;
        case "1":
            takeup = (type === "EMT" ? 8 : 11);
            break;
        case "1 1/4":
            takeup = (type === "EMT" ? 11 : 88);
            break;
        default:
            takeup = 0;
            break;
    }
    return (takeup);
}

const StubUp = (props: AppProps) => {
const [distanceToBend, setDistanceToBend] = useState<number>(0);
const [stubMeasure1, setStubMeasure1] = useState<number>(0);

    const calculateBend = (event : any) => {
        event.preventDefault();
        setDistanceToBend(stubMeasure1 - getTakeup(props.conduitSize, props.conduitType));
    };

    const changeMeasure1 = (event : any) => {
        console.log(typeof(event));
        setStubMeasure1(event.target.value);
    };

    return (
        <div className="StageTwo-container">
            <h2>StubUp</h2>
            <div className="measurements">
                <form onSubmit={calculateBend}>
                    <label htmlFor="stubMeasure1">Distance to back of 90</label>
                    <input id="stubMeasure1" type="number" step="0.125" value={stubMeasure1} onChange={changeMeasure1}></input>
                    <button type="submit">Calculate</button>
                </form>

            </div>
            <div className="display">
                <p>step 1</p>
                <p className="measure1">{distanceToBend > 0 ? distanceToBend : "Error"}</p>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
            </div>
        </div>
    );
};

export default StubUp;