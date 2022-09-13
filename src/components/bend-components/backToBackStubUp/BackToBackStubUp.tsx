import React from "react";
import { useState } from "react";
import MeasurementInput from "../measurementInput/MeasurementInput";
import { getTakeup } from "../../../utils";

type AppProps = {
    conduitSize: string;
    conduitType: string;
}

const BackToBackStubUp = (props: AppProps) => {

const [btbMeasure1, setbtbMeasure1] = useState<any>(0);
const [distanceToBend2, setDistanceToBend2] = useState<number>(0);
const [minFirstBendDistance, setMinFirstBendDistance] = useState<number>(0);


const calculateMinDistanceToFirstBend = () => {
    let minDist = 0;
    minDist += getTakeup(props.conduitSize, props.conduitType);
    minDist += parseInt(btbMeasure1);
    minDist += 2.5;
    return (minDist);
}

const calculateBend = (event: any) => {
    event.preventDefault();
    setMinFirstBendDistance(calculateMinDistanceToFirstBend);
    setDistanceToBend2(btbMeasure1);
};

    return (
        <div className="backToBackStubUp-container">
            <h1>Back to Back Stub</h1>
            <div className="measurements">
                <form onSubmit={calculateBend}>
                    < MeasurementInput
                        id="stubMeasure1"
                        label="Distance between obstructions"
                        value={btbMeasure1}
                        updateValueFunction={setbtbMeasure1}
                    />
                    <button type="submit">Calculate</button>
                </form>
            </div>
            <div className="display">
                <p>step 1</p>
                <p className="measure1">standard stub up. leave at least { minFirstBendDistance }" after the first mark.</p>
                <p>step 2</p>
                <p>bend with mark on the star. face bender away from previous bend.</p>
                <p className="measure1">{distanceToBend2 > 0 ? distanceToBend2 : "Error"}"</p>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
            </div>
        </div>
    );
};


export default BackToBackStubUp;