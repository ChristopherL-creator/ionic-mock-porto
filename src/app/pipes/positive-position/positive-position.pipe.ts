import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positivePosition'
})
export class PositivePositionPipe implements PipeTransform {

  transform(position: number): number {

    return Math.abs(position);
  }

}
