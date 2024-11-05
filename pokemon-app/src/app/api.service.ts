import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Pokemon{
    name:string;
    url:string;
}
export interface PokemonsModel{
     count:number;
     next:string;
     previous:null | string;
     results:Pokemon[];
}
export interface PokemonDetail{
    name:string;
    sprites:any;
    height:number;
    weight:number;
    abilities:any[];
    stats:any[];
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private URL_BASE = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number = 20, offset: number = 0): Observable<PokemonsModel> {
    return this.http.get<PokemonsModel>(`${this.URL_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.URL_BASE}/pokemon/${name}`);
  }
}