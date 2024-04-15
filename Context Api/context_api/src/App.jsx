import React, { useContext, useState } from 'react';
// import { Context } from 'react';
import { LevelContext } from './Context';
const personalData = {
    name: "Mahesh",
    rollNumber: 12,
    class: "10th"
};

const Agents = () => {
    return <AgentTwo />;
};

const AgentTwo = () => {
    return <AgentThree />;
};

const AgentThree = () => {
    return <AgentBond />;
};

const AgentBond = () => {
    const level = useContext(LevelContext);
    console.log(typeof level)
    return (
        <>

            <h1>Hello World :{level.name}</h1>
            <h1>Hello World :{level.class}</h1>
        </>);
};



const App = () => {
    const [num, setNum] = useState(5);
    return (
        <LevelContext.Provider value={personalData}>
            <Agents />
        </LevelContext.Provider>
    );
};

export default App;

