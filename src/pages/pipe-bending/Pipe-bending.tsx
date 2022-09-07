import React from "react";
import {useState} from "react";
import Nav from "../../components/nav/Nav";
import StubUp from "../../components/bend-components/stubUp/StubUp";
import BackToBackStubUp from "../../components/bend-components/backToBackStubUp/BackToBackStubUp";

/* TODO:
** - Display
** - Images of bends
** - Steps selector 
** - type of bend selector
** - measurement inputs
** - calculate button
*/


// const getNumMeasurements = (bendType: string) => {
//     let numMeasurements = 1;
//     switch (bendType) {
//         case "1":
//         case "2":
//             numMeasurements = 1;
//             break;
//         case "3":
//         case "4":
//         case "7":
//             numMeasurements = 2;
//             break;
//         case "5":
//         case "6":
//             numMeasurements = 3;
//             break;
//         case "8":
//             numMeasurements = 0;
//             break;
//     }
//     return (numMeasurements);
// };
const PipeBending = () => {

    const [bendType, setBendType] = useState<string>("1");
    const [pipeSize, setPipeSize] = useState<string>("3/4");
    const [pipeType, setPipeType] = useState<string>("EMT");
    // const numMeasurements = useRef<number>(1);

    const changeBendType = (event : any) => {
        setBendType(event.target.value);
        // numMeasurements.current = getNumMeasurements(event.target.value);
    };
    const changePipeSize = (event : any) => {
        setPipeSize(event.target.value);
    };
    const changePipeType = (event : any) => {
        setPipeType(event.target.value);
    };

    const selectBendDisplay = (bendType: string) => {
        if (bendType === "stubUp") {
            return ( <StubUp conduitSize={pipeSize} conduitType={pipeType}/>);
        }
        if (bendType === "backToBack90") {
            return (<BackToBackStubUp conduitSize={pipeSize} conduitType={pipeType}/>)
        }
        else {
            return ( <StubUp conduitSize={pipeSize} conduitType={pipeType}/>);
        }
    }

    return (
        <div className="pipe-bending">
            <Nav />
            <h1>Pipe Bending</h1>
            <ul>
                <li>
                    <label htmlFor="pipe-size">Pipe size</label>
                    <select id="pipe-size" onChange={changePipeSize} value={pipeSize}>
                        <option value="1/2">1/2"</option>
                        <option value="3/4">3/4"</option>
                        <option value="1">1"</option>
                        <option value="1 1/4">1 1/4"</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="pipe-type" >pipe type</label>
                    <select id="pipe-type" onChange={changePipeType} value={pipeType}>
                        <option value="EMT">EMT</option>
                        <option value="RMC">RMC</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="bend-type">Bend Type</label>
                    <select id="bend-Type" onChange={changeBendType} value={bendType}>
                        <option value="stubUp" >90deg</option>
                        <option value="backToBack90" >Back to Back 90</option>
                        <option value="offset" >Offset</option>
                        <option value="kick90" >kick 90</option>
                        <option value="rolledOffset" >Rolled offset</option>
                        <option value="4ptSaddle" >4pt Saddle</option>
                        <option value="3ptSaddle" >3pt Saddle</option>
                        <option value="BoxOffset" >Box offset</option>
                    </select>
                </li>
            </ul>
            
            
            

            
            <div className="measurements-input-container">
                {selectBendDisplay(bendType)}
                {/* Could break into own component? */}
                {/* take numMeasurements.current  */}
            </div>
            <div className="display">
                {/* WIll most likely break into its own component */}
            </div>
        </div>
    );
};

export default PipeBending;
// create a component for each different type of bend to get measurements needed and to calculate and display.