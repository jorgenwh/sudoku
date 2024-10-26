import State from '../sudoku/state';
import Board from './board';

interface ViewProps {
    state: State;
}

function View({ state } : ViewProps) {
    const header = <div style={{
        width: '100vw',
        height: '10vh',
        minWidth: '100vw',
        minHeight: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '3em',
    }}>Sudoku!</div>;

    const board = <div style={{
        width: '100vw',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }}><Board state={state}/></div>;

    const footer = <div style={{
        width: '100vw',
        height: '10vh',
        minWidth: '100vw',
        minHeight: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }}></div>;

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {header}
            {board}
            {footer}
        </div>
    );
}

export default View;
