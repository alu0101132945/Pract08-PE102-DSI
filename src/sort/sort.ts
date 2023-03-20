export interface Strategy {
    /**
     * declaracion del metodo execute
     * @param data array que va a ser modificado
     */
    execute(data: number[]): number[];
}

export class Sort {
    /**
     * constructor de la clase sort
     * @param unsortArray array desordenado
     * @param sortStrategy estragia de ordenacion
     */
    constructor(private unsortArray: number[], private sortStrategy: Strategy){}

    /**
     * metodo que permite cambiar la estrategia de ordenacion
     * @param strategy 
     */
    setSortStrategy(strategy: Strategy) {
        this.sortStrategy = strategy;
    }
    getSortStrategy() {
        return this.sortStrategy;
    }
    /**
     * metodo que ejecuta la estrategia de ordenacion
     * @returns devuelve el array ordenado
     */
    logic() :number[]{
        return this.sortStrategy.execute(this.unsortArray);
    }
}
