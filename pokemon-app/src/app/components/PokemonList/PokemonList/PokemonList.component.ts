import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ApiService, Pokemon } from '../../../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,RouterModule 
  ],
  templateUrl: './PokemonList.component.html',
  styleUrl: './PokemonList.component.scss',
})
export class PokemonListComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(
    private readonly api: ApiService, 
  ) {}

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons() : void {
    this.api.getPokemons().subscribe(res => {
     this.pokemons =  res.results
    });
  }

 }
