import React, { useState } from 'react';

interface CellProps {
    state: number;
    row: number;
    col: number;
}

function Cell({ state, row, col } : CellProps) {
    const [selected, setSelected] = useState(false);
    const [value, setValue] = useState(state);

    const handleClick = () => {
        setSelected(!selected);
    }

    const cell = state === 0 ? '' : state.toString();

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '50px',
        height: '50px',
        minWidth: '50px',
        minHeight: '50px',

        fontSize: '2.25rem',

        color: 'white',
        backgroundColor: 'black',

        borderTop: '1px solid white',
        borderRight: '1px solid white',
        borderBottom: '1px solid white',
        borderLeft: '1px solid white',
    };

    if (row === 0 || row === 3 || row === 6) { 
        style.borderTop = '3px solid white';
    }
    if (row === 8) {
        style.borderBottom = '3px solid white';
    }
    if (col === 0 || col === 3 || col === 6) { 
        style.borderLeft = '3px solid white';
    }
    if (col === 8) {
        style.borderRight = '3px solid white';
    }

    if (selected) {
        style.backgroundColor = 'white';
        style.color = 'black';
    }

    return <div style={style} onClick={handleClick}>{cell}</div>;
}

export default Cell;
