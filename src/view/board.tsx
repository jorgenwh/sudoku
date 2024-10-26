import State from '../sudoku/state';
import Cell from './cell';

interface BoardProps {
    state: State;
}

const buildRow = (rowState: number[], row: number) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
                rowState.map((cellState, col) => {
                    return <Cell state={cellState} row={row} col={col}/>;
                })
            }
        </div>
    );
}

const buildBoard = (grid: number[][]) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                grid.map((rowState, row) => {
                    return buildRow(rowState, row);
                })
            } 
        </div>
    );
}

function Board({ state } : BoardProps) {
    const board = buildBoard(state.getVisibleGrid());
    return board;
}

export default Board;
