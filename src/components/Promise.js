import React from 'react';

function Promisea() {
        let promise = new Promise(function(resolve, reject) {
          //resolve("Thành công");
          reject(new Error("Thất bại cmnr"))
        });
        promise.then((msg) => console.log("Đã thực thi: " + msg),
        (errMsg) => console.log(errMsg+"")
        );



        
    return (
        <div>
            aaaaa

        </div>
    );
}

export default Promisea;