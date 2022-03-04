import React from "react";
import {NewMountainForm} from './NewMountainForm';

export const Range = (props) => {
    const {range, updateRange} = props;

    const deleteMountain = (mountainId) => {
        const updateRange = {
        ...range,
        mountains: range.mountains.filter((x) => x._id !== mountainId)
        };
        updateRange(updateRange);
    }

    const addNewMountain = (mountain) => updateRange({...range, mountains: [...range.mountains, mountain]})
    
    const mountains = () => (
        <ul>
            {range.mountains.map((mountain, index) => (
            <li key= {index}>
                <label> {`${mountain.name} Altitude: ${mountain.altitude}`}</label>
                <button onClick={(e) => deleteMountain(mountain._id)}>Delete</button>
            </li>
            ))}
        </ul>
    )

    return (
        <div>
            <h1>{range.name}</h1>
            {
                mountains({ mountains, rangeId: range._id, deleteMountain})
            }
            <NewMountainForm addNewMountain={addNewMountain} />        
            </div>
    );
};