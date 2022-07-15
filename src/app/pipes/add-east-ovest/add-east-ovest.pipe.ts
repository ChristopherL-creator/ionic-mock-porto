import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEastOvest'
})
export class AddEastOvestPipe implements PipeTransform {

  transform(position: number, cardinal: string): string {
    if (position < 0) {
      cardinal = ' Est';
      position = position * -1;
    } else {
      cardinal = ' Ovest';
    }

    return position + cardinal;
  }

}
