// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child/>
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
// 2. import { MyContext } from './ComponentA';
// 3. const value = useContext(MyContext);

// ---------- ComponentC ----------
import ComponentD from './ComponentD.jsx';
import { useContext } from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Welcome ${user}`}</h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC;