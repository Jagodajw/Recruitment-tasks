import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/PokemonList/PokemonList/PokemonList.component';
import { PokemonDetailComponent } from './components/PokemonDetail/PokemonDetail/PokemonDetail.component';

export const routes: Routes = [
    { path: '', component: PokemonListComponent} ,
    { path: 'pokemon/:name', component: PokemonDetailComponent }
];

