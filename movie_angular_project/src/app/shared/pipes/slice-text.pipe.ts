import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText',
})
export class SliceTextPipe implements PipeTransform {
  // transform text when it is longer than the given number (or default 50 chars).
  transform(value: string, numberOfCharacters?: number): string {
    if (value.length < (numberOfCharacters ?? 50)) {
      return value;
    } else {
      // when longer than given amount, slice off to the amount.
      return value.slice(0, numberOfCharacters ?? 50);
    }
  }
}
