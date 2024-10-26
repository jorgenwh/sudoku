import State from './sudoku/state';
import View from './view/view';

function App() {
    const state = new State(9, 9);
    const view = <View state={state}/>;

    state.createPuzzle();
    
    return <div style={{
        textAlign: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#111113',
        display: 'flex',
        flexDirection: 'column',
    }}>{view}</div>;
}

export default App;
