import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) return '';
    return parseFloat(value.toString()).toLocaleString('en-US');
  }

}
