import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snubText',
})
export class SnubTextPipe implements PipeTransform {
  // transform text when it is longer than the given number and add dots. (or default 50 chars).
  transform(value: string, numberOfCharacters?: number): string {
    if (value.length < (numberOfCharacters ?? 50)) {
      return value;
    } else {
      // when longer than given amount, slice off to the amount and add dots.
      return value.slice(0, numberOfCharacters ?? 47) + ' ...';
    }
  }
}
