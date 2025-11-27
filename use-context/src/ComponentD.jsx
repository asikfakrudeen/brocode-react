// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
// 2. import { MyContext } from './ComponentA';
// 3. const value = useContext(MyContext);

// ---------- ComponentD ----------
import {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentD(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD