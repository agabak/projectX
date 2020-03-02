import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, realValue?: number): string {
    const trueValue = (realValue) ??  10;
    if (value) {
     return  value.substring(0, trueValue) + '...';
    }
    return null;
  }

}
