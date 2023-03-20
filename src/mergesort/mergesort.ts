import{Strategy} from '../sort/sort'

export class Mergesort implements Strategy {
    /**
     * implementacion de execute para el metodo mergesort
     * @param data array que se va ordenar
     * @returns un array ordenado
     */
    
    execute(data:number[]):number[]{
        if (data.length <= 1) {
            return data;
        }
        const mid = Math.floor(data.length / 2);
        const left = this.execute(data.slice(0, mid));
        const right = this.execute(data.slice(mid));
        return this.merge(left, right);
    }
    /**
     * operacion de merge del mergesort
     * @param left array de elementos
     * @param right array de elementos
     * @returns un array que contiene los elementos de left y right
     */
    merge(left: number[], right: number[]): number[] {
        const result:number[] = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }  
}