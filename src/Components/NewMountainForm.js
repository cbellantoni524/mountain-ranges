import React, {useState} from "react";

export const NewMountainForm = (props) => {
    const [name, setName] = useState('');
    const [altitude, setAltitude] = useState(undefined);

    const handleAltitudeInput =(e) => {
        const int = parseInt(e.target.value, 10);
        setAltitude(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && altitude) {
            props.addNewMountain({name, altitude});
            setAltitude('');
            setName('');
        } else {
            console.log('invalid Input');
        }
    };

    return(
        <div>
            <h4>Add a New mountain</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                <input
                    type='text'
                    placeholder="altitude"
                    onChange={handleAltitudeInput}
                    value={altitude}
                    />
             <button type="submit">Add Mountain</button>
            </form>
        </div>
    )
};