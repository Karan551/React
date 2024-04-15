import React, { useContext, useState } from 'react';
import { LevelContext } from './Context';

const Provider = (props) => {
    // The Data that we want to transfer from any component.
    const [mission, setMission] = useState(data);
    return (
        <LevelContext.Provider value={
            {
                data: mission,
                isMissionAccepted: () => {
                    setMission({ ...mission, accept: "Mission Accepted" });
                }
            }
        }>
            {props.children}
        </LevelContext.Provider>
    );

};


export default Provider;