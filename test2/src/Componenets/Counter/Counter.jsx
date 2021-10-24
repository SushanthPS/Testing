import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <div>
                <h1>Counter</h1>
                <h1 data-testid="count">{count}</h1>
            </div>
            <Button onClick={increment} label="increment"></Button>
            <Button onClick={decrement} label="decrement"></Button>
        </div>
    );
};
