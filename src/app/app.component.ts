import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  password = '';

  onChangeUserLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUserNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onButtonClick() {
    console.log(this.includeLetters);
    this.password = 'MY PASSWORD';
  }
}
