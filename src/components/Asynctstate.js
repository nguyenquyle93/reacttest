import React, { useState } from 'react';

function Asynctstate(props) {

    const ar = [{
        count : 5,
        group : 7,
        totalPrice : 10,
    },
    {
        count : 5,
        group : 10,
        totalPrice : 20,
    }
]

    const [data, setData] = useState();
    const [seri, setSeri] = useState();
    const [currenSelectMonth,SetCurrenSelectMonth] = useState();
    const [currenSelectYear,SetCurrenSelectYear] = useState();

    const dataChange = (data) => {
        let array = [];
            for (let i = 0; i< data;i++){
                array.push(0);
            };
        return array;
    }

    const getTrueData = (array,arraydata) => {
        for (let i = 0; i<arraydata.length;i++){
            array[arraydata[i].group] = arraydata[i].group
        }
        return array
    }

    const seriChange = (data) => {
        let array = [];
            for (let i = 0; i< data;i++){
                array.push(i);
            };
        return array;
    }
    var getDaysInMonth = function(month,year) {
       return new Date(year, month, 0).getDate();}

    const handleClickYear = async () => {
        setData(getTrueData(dataChange(12),ar));
        setSeri(seriChange(12));
    }

    const handleClickMonth = async (e) => {
        const month = getDaysInMonth(e.target.value,2020)
        setData(getTrueData(dataChange(month),ar));
        setSeri(seriChange(month));
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick = {handleClickYear}>Click Year</button>
            <button type="button" className="btn btn-primary" onClick = {handleClickMonth}>Click Year</button>
            <div className="form-group">
              <label></label>
              <select multiple className="form-control" name="name" id="id" onClick={(e) => handleClickMonth(e)}>
                <option value = {1}>1</option>
                <option value = {2}>2</option>
                <option value = {3}>3</option>
                <option value = {4}>4</option>
              </select>
            </div>
            <br></br>
            {data}
            <br></br>
            {seri}
        </div>
    );
}

export default Asynctstate;