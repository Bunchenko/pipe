import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleNumbers'
})
export class DoubleNumbersPipe implements PipeTransform {

  transform(arr: number[]): number[] {
    return arr.map((item: number): number => item * 2);
  }

}
