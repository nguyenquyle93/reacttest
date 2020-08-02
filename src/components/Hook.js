import React, { useState } from 'react';


function Hook() {

    const [array,setArray]  = useState([]);
    const makeArray = (number) => {
        let createArray = [];
        for (let i=0;i<number;i++){
            createArray.push(i+1);
        }
        return createArray;
    }
    const selected = (value) => {
        setArray(makeArray(value.target.value))
    }
    const b =  array.map((value,index) => {
        return <li key={index} className="list-group-item">{value}</li>
    })
    return (
        <div className="form-group">
            <label ></label>
            <select className="custom-select" name="name" id="id" onChange = {selected} default="chọn 1 cái đê">
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="29">29</option>
            </select>
            <ul className="list-group">
                {b}
            </ul>
        </div>

    );
}

export default Hook;