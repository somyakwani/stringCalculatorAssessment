

import { Component } from '@angular/core';
import { StringCalculatorComponent, } from './string-component/string-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StringCalculatorComponent],
  template: `<app-string-calculator></app-string-calculator>`,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
