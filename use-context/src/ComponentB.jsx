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

// ---------- ComponentB ----------
import ComponentC from './ComponentC.jsx';

function ComponentB(){

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;