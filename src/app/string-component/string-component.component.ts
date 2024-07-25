

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StringCalculatorService } from '../string-calculator.service';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './string-component.component.html',
  styleUrls: ['./string-component.component.css']
})
export class StringCalculatorComponent {
  input: string = '';
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private stringCalculatorService: StringCalculatorService) { }

  calculate(): void {
    try {
      this.result = this.stringCalculatorService.add(this.input);
      this.errorMessage = null;
    } catch (e) {
      this.errorMessage = (e as Error).message;
      this.result = null;
    }
  }
}


