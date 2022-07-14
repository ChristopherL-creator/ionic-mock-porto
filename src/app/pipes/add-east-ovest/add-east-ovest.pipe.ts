import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEastOvest'
})
export class AddEastOvestPipe implements PipeTransform {

  transform(position: number, cardinal: string): string {
    if (position < 0) {
      cardinal = 'E';
    } else {
      cardinal = 'O';
    }
    console.log(position);
    return position + cardinal;
  }

}
