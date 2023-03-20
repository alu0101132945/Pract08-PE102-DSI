import { Strategy } from "../sort/sort";
export class Bubblesort implements Strategy{
    /**
     * implementacion de execute para el bubblesort
     * @param data array de numeros desordenados
     * @returns array de numeros ordenados
     */
    execute(data: number[]): number[] {
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
        }while(swapped)
        return data;
    }    
}
