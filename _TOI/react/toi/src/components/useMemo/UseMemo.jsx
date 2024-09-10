import React, { useState, useMemo, useCallback } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    const exp = useMemo(() => {
        console.log("Calculating...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += 1;
        }
        return result + number;
    }, [number]);

    // const exp = () => {
    //     console.log("Calculating...");
    //     let result = 0;
    //     for (let i = 0; i < 1000000000; i++) {
    //         result += 1;
    //     }
    //     return result + number;
    // };

    return (
        <div>
            {/* <h3>Result: {exp()}</h3> */}
            <h3>Result: {exp}</h3>
            <input 
                type="number" 
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
            />

            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
};

export default UseMemo;