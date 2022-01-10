import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const UseState = () => {
    const [display, setDisplay] = useState(true)
    const [work, Setwork] = useState(true);

    const ToggleFunction = () => {
        const temp = (!display);
        console.log(temp);
        Setwork(temp);
        setDisplay(!work);
    }
    return (
        <div>
            {display && <h1>UseState Hook</h1>}
            <Button onClick={ToggleFunction} className="btn btn-info text-white">Click me</Button>
        </div>
    )
}

export default UseState
