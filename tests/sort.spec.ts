import 'mocha';
import {expect} from 'chai';
import {Sort} from '../src/sort/sort'
import {Bubblesort} from '../src/bubblesort/bubblesort'
import {Mergesort} from '../src/mergesort/mergesort'

describe('Sort methods tests', () => {

    context('Bubblesort methods tests', () =>{
        const mySort = new Sort([6,2,8,5,1,3],new Bubblesort);
        const mySort2 = new Sort([10,2,120,46,31,660],new Bubblesort);
        it('logic tests', () => {
            expect(mySort.logic()).to.deep.equal([1,2,3,5,6,8]);
            expect(mySort2.logic()).to.deep.equal([2,10,31,46,120,660]);
        });
        it('change logic tests', () => {
            const merg = new Mergesort
            mySort2.setSortStrategy(new Mergesort)
            expect(mySort.getSortStrategy()).to.deep.equal(merg);
        });
    })
    context('Mergesort methods tests', () =>{
        const mySort = new Sort([6,2,8,5,1,3],new Mergesort);
        const mySort2 = new Sort([10,2,120,46,31,660],new Mergesort);
        it('logic tests', () => {
            expect(mySort.logic()).to.deep.equal([1,2,3,5,6,8]);
            expect(mySort2.logic()).to.deep.equal([2,10,31,46,120,660]);
        });
    })
});