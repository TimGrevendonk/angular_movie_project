import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snubText'
})
export class SnubTextPipe implements PipeTransform {

  transform(value: string, numberOfCharacters?: number): string {
    if(value.length < (numberOfCharacters ?? 50)) {
      return value;
    } else {
      return value.slice(0, numberOfCharacters ?? 47)  + " ...";
    }
  }
}
