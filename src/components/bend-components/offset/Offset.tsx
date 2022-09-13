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

    return (
        <div className="offset-wrapper">
            < MeasurementInput id="measure-one-offset"
                label="Height of obstruction"
                value={offsetHeight}
                updateValueFunction={setOffsetHeight}
            />
            <select >
                <option>10deg</option>
                <option>22.5deg</option>
                <option>30deg</option>
                <option>45deg</option>
                <option>60deg</option>
            </select>
        </div>
    );
}

export default Offset;