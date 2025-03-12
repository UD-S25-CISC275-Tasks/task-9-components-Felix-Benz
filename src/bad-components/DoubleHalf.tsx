import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue(dhValue * 2);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue(dhValue * 0.5);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
