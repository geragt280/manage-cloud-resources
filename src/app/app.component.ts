import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommentsComponent } from './components/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommentsComponent],
  styleUrl: './app.component.scss',
  template: `
    <nav><a routerLink="/">Home</a> | <a routerLink="/user">User</a></nav>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'manage-cloud-resources';
}
