import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeColorByPosition'
})
export class ChangeColorByPositionPipe implements PipeTransform {

  transform(position: number, ...args: unknown[]): string {
    if (position < -200 || position > 200) {
      return 'crimson';
    } else if (position > -200 && position < -100) {
      return 'orange';
    } else if (position > -200 && position < -100) {
      return 'yellow';
    } else if (position > -100 && position < 100) {
      return 'green';
    } else if (position > 100 && position < 200) {
      return 'yellow';
    }
  }

}
