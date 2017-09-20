import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length !== 0) {
      const array_sum = value.reduce((a, b) => +a + +b);
      const not_zero = value.filter((a) => a !== 0);
      const average = array_sum / not_zero.length;
      return (isNaN(average) ? '' : Math.round((average * 100)) / 100);
    }
  }
}
