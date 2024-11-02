import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'user',
  template: `
    <div>
      <p>User component</p>

      <p>Username: {{ username }}</p>
      <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
      <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework"
      /></label>
      <button (click)="showFramework()">Show Framework</button>
    </div>
  `,
})
export class UserComponent implements OnInit {
  username = 'youngTech';
  favoriteFramework = '';
  constructor() {}

  ngOnInit() {}
  showFramework() {
    alert(this.favoriteFramework);
  }
}
