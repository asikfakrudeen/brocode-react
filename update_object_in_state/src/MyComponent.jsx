import React, { useState } from 'react';
import './App.css'

const MyComponent = () => {

    const initialValue = {year: 2024, make: "Ford", model: "Mustang"};
    const [car, setCar] = useState(initialValue);

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
        console.log(`year updated : ${event.target.value}`)
    }
    
    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
        console.log(`make updated : ${event.target.value}`)
    }
    
    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
        console.log(`make updated : ${event.target.value}`)
    }
   
    return (<div className = 'container'>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                <input type = "number" value = {car.year} onChange = {handleYearChange}/><br/>
                <input type = "text" value = {car.make} onChange = {handleMakeChange}/><br/>
                <input type = "text" value = {car.model} onChange = {handleModelChange}/><br/>
            </div>);
}

export default MyComponent