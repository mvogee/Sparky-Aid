import React from "react";
import {useState} from "react";
import Nav from "../../components/nav/Nav";

/* TODO:
** - Display
** - Images of bends
** - Steps selector 
** - type of bend selector
** - measurement inputs
** - calculate button
*/



const PipeBending = () => {

    const [bendType, setBendType] = useState<number>(1);
    const [pipeSize, setPipeSize] = useState<string>("1/2");
    const [pipeType, setPipeType] = useState<string>("EMT");

    const changeBendType = (event : any) => {
        setBendType(event.target.value);
    };
    const changePipeSize = (event : any) => {
        setPipeSize(event.target.value);
    };
    const changePipeType = (event : any) => {
        setPipeType(event.target.value);
    };
    return (
        <div className="pipe-bending">
            <Nav />
            <h1>Pipe Bending</h1>
            
            <label htmlFor="pipe-size">Pipe size</label>
            <select id="pipe-size" onChange={changePipeSize} value={pipeSize}>
                <option value="1/2">1/2"</option>
                <option value="3/4">3/4"</option>
                <option value="1">1"</option>
                <option value="1 1/4">1 1/4"</option>
            </select>
            
            <label htmlFor="pipe-type" >pipe type</label>
            <select id="pipe-type" onChange={changePipeType} value={pipeType}>
                <option value="EMT">EMT</option>
                <option value="RMC">RMC</option>
            </select>

            <label htmlFor="bend-type">Bend Type</label>
            <select id="bend-Type" onChange={changeBendType} value={bendType}>
                <option value={1} >90deg</option>
                <option value={2} >Back to Back 90</option>
                <option value={3} >Offset</option>
                <option value={4} >kick 90</option>
                <option value={5} >Rolled offset</option>
                <option value={6} >4pt Saddle</option>
                <option value={7} >3pt Saddle</option>
                <option value={8} >Box offset</option>
            </select>
        </div>
    );
};

export default PipeBending;