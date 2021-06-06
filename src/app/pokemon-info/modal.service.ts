import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonService } from '../pokemon-list/pokemon.service';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;

 

  private _notificarUpload = new EventEmitter<any>();

  constructor() { }

  ngAfterViewInit() {
    this.modal = true;
  }

  get notificarUpload(): EventEmitter<any> {
    return this._notificarUpload;
  }

  

  openModal() {

    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }
}



