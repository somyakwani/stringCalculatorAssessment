// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StringCalculatorService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 2);
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }

    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((acc, num) => acc + num, 0);
  }
}
