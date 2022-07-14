import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeColorByPosition'
})
export class ChangeColorByPositionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < -200 || value > 200) {
      return 'red';
    } else if (value > -200 && value < -100) {
      return 'yellow';
    } else if (value > -200 && value < -100) {
      return 'yellow';
    } else if (value > -100 && value < 100) {
      return 'green';
    } else if (value > 100 && value < 200) {
      return 'yellow';
    }
  }

}
