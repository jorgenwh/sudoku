
class State {
    private solutionGrid: number[][];
    private visibleGrid: number[][];
    private editableGrid: number[][];

    constructor(rows: number, cols: number) {
        this.solutionGrid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        this.visibleGrid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        this.editableGrid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    }

    getVisibleGrid() {
        return this.visibleGrid;
    }

    createPuzzle() { 

    }
}

export default State;
