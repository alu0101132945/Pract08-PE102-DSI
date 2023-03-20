export interface Strategy {
    execute(data: number[]): void;
}

export class Sort {
    constructor(private unsortArray: number[], private sortStrategy: Strategy){}

    setSortStrategy(strategy: Strategy) {
        this.sortStrategy = strategy;
    }

    logic() {
        this.sortStrategy.execute(this.unsortArray);
    }
}

export class Bubblesort implements Strategy{
    execute(data: number[]): void {
        let n:number = data.length;
        let swapped:boolean;
        do{
            swapped = false
            for(let i = 1; i <= n-1;i++){
                if(data[i-1] > data[i]){
                    let aux:number;
                    aux = data[i-1];
                    data[i-1] = data[i];
                    data[i] = aux;
                    swapped = true
                }
            }
            n-=1
        }while(!swapped)
    }
}