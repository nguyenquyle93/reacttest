import React from 'react';

function Asynct(props) {
    // let sum = (o,p) => {return o+p}
    // let a = (c,d) => {
    //     return setTimeout(sum(c,d)
    //     ,3000)
    // }
    // console.log(a(3,3))
    // let time = 1
    // let handleTime = () => {
    //         document.getElementById("demo").innerHTML = time++;
    //         setTimeout(handleTime, 1000);
    // }
    let ahihi = (c,d) => c+d
    let sum = (bien) => {
        setTimeout(bien.toString(), 2000)}
        console.log(sum(ahihi(4,5)))

        let asyn = async () => { 
                let tong2 = await sum(9);
                console.log("tổng 2 là ", tong2)
        }
        asyn()
    return (
        <div>
            <button type="button" className="btn btn-primary">Click Me</button>
            <p id="demo"></p>
        </div>
    );
}

export default Asynct;