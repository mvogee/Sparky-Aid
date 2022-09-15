import React from "react";
import { useState } from "react";
import MeasurementInput from "../measurementInput/MeasurementInput"

type AppProps = {
    conduitSize: string;
    conduitType: string;
}

// inputs needed.
// degree of bend. select
// height of obstruction. measurement
const Offset = (props: AppProps) => {

    const [offsetHeight, setOffsetHeight] = useState<number>(0);
    //const [degreeBends, setDegreeBends] = useState<string>("10deg");
    const [multiplier, setMultiplier] = useState<number>(6);

    const changeDegree = (event: any) => {
        setMultiplier(parseFloat(event.target.value));
    };

    return (
        <div className="offset-wrapper">
            < MeasurementInput id="measure-one-offset"
                label="Height of obstruction"
                value={offsetHeight}
                updateValueFunction={setOffsetHeight}
            />
            <select onChange={changeDegree}>
                <option value="6">10deg</option>
                <option value="2.6">22.5deg</option>
                <option value="2">30deg</option>
                <option value="1.4">45deg</option>
                <option value="1.2">60deg</option>
            </select>
            <div className="display">
                <p>first bend: at least {offsetHeight * multiplier}" from obstacle.</p>
                <p>second bend: mark {offsetHeight * multiplier}" from first bend</p>
            </div>
        </div>
    );
}

export default Offset;