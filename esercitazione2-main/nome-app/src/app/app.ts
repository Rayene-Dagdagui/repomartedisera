import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherExplorerComponent } from './weather-explorer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, WeatherExplorerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Esploratore Meteo');
}

