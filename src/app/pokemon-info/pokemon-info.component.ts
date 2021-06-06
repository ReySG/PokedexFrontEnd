import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvolutionChain } from '../models/evolution-chain';
import { FlavorText } from '../models/flavor-text';
import { Pokemon } from '../models/pokemon';
import { PokemonSpecies } from '../models/pokemon-species';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonService } from '../pokemon-list/pokemon.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  @Input()
  pokemon: Pokemon;

  tipo: []; 
  text: FlavorText[];
  specieSelected: PokemonSpecies[];
  idSpecie: any;
  evolucion: EvolutionChain;
  descripcion: [];

  constructor(public modalService: ModalService, private PokemonService: PokemonService, private activatedRoute: ActivatedRoute, private pokemonList: PokemonListComponent) { 


  }

  ngOnInit(): void {
    console.log(this.pokemon);
    
  }





  objectKeys(obj) {
    return Object.keys(obj);
  }

  closeModal() {
    this.modalService.closeModal();
    console.log(this.evolucion);
    
  }

}
