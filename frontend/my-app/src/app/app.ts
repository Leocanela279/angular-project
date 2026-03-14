import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { Characters } from './characters/characters';

@Component({
  selector: 'app-root',
  imports: [Characters],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
