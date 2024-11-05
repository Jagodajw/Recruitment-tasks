import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService, PokemonDetail } from '../../../api.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,RouterModule
  ],
  templateUrl: './PokemonDetail.component.html',
  styleUrl: './PokemonDetail.component.scss',
})
export class PokemonDetailComponent implements OnInit{ 
  public pokemon:PokemonDetail | null = null;


  constructor(private readonly route: ActivatedRoute, private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const name = params.get('name');
          return this.apiService.getPokemonDetails(name!);
        })
      )
      .subscribe(response => {
        this.pokemon = response;
      });
  }
}
