import { Component, LOCALE_ID, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-i18n';
  today = new Date();
  test = new FormControl('');
  minutes = Math.floor(Math.random() * 3);
  constructor(@Inject(LOCALE_ID) public locale: string) {}
}
