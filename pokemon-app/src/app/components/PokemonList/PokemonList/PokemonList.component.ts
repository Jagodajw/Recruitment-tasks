import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { ApiService, Pokemon } from '../../../api.service';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,RouterModule 
  ],
  templateUrl: './PokemonList.component.html',
  styleUrl: './PokemonList.component.scss',
})
export class PokemonListComponent {
  public pokemons$: Observable<Pokemon[]>;

  constructor(
    private readonly api: ApiService, 
  ) {
    this.pokemons$ = this.api.getPokemons().pipe(map(({results})=>results))
  }

 }
