import React from "react";

type AppProps = {
    id: string;
    label: string | null;
    value: number;
    updateValueFunction: Function;
}

const MeasurementInput = (props: AppProps) => {

    const updateValue = (event: any) => {
        props.updateValueFunction(event.target.value);
    }

    return (
        <div className="measurement-input-container">
            <label htmlFor="stubMeasure1">{props.label}</label>
            <input id="stubMeasure1" type="number" step="0.125" value={props.value} onChange={updateValue}></input>
        </div>
    );
    
};


export default MeasurementInput;

