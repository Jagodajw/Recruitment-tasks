import { Component,  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './components/PokemonList/PokemonList/PokemonList.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonListComponent, HttpClientModule, RouterModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
