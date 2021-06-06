import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import {URL_BACKEND} from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // //Con URL_BACKEND nos conectamos al backend alojado en heroku
  private pokemonUrlEndPoint: string = URL_BACKEND + '/api/obtener-pokemon';

  private pokemonDataUrl: string= URL_BACKEND + '/api/obtener-data'

  constructor(private http: HttpClient) { }

  

  getPokemons(limit: number, offset: number) {
    return this.http.get<Pokemon>(`${this.pokemonUrlEndPoint}?limit=${limit}&offset=${offset}`)
  }


  getPokemonData(id: string) {
    return this.http.get(`${this.pokemonDataUrl}/${id}`)
  }
  

}
