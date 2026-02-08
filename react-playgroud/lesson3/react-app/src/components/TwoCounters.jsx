import React, { useState } from 'react';
import './TwoCounters.css';

function ClickButton({ count, setCount, label }) {
    return (
        <button className="counter-button" onClick={setCount}>
            {label || `Clicked ${count} times`}
        </button>
    );
}

function TwoCounters() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    function handleClickA() {
        setCountA(prevCount => {
            if (prevCount === 3) {
                return 1;
            }
            return prevCount + 1;
        });
    }

    function handleClickB() {
        setCountB(prevCount => {
            if (prevCount === 3) {
                return 1;
            }
            return prevCount + 1;
        });
    }

    function resetAll() {
        setCountA(0);
        setCountB(0);
    }

    return (
        <div className="two-counters-container">
            <h2>Two Counters Practice</h2>
            <div className="counters-wrapper">
                <ClickButton count={countA} setCount={handleClickA} />
                <ClickButton count={countB} setCount={handleClickB} />
            </div>
            <button className="reset-button" onClick={resetAll}>
                Reset
            </button>
        </div>
    );
}

export default TwoCounters;
