import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../../api.service';
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
  public pokemon:any;


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
