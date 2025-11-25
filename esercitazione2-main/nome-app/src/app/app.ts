import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreetoGameExplorerComponent } from './freetogame-explorer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FreetoGameExplorerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Esploratore Meteo');
}
