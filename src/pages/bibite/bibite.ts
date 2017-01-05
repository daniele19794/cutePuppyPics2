import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdineService } from '../../ordine.services';
import { Bibita } from '../../bibite';
import { BibiteService } from '../../bibite.services';

/*
  Generated class for the Bibite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bibite',
  templateUrl: 'bibite.html'
})
export class BibitePage {

  bibite: Bibita[];
  bibiteService: BibiteService;

  
  constructor(public navCtrl: NavController, private ordineService: OrdineService) {
    this.bibiteService = new BibiteService();
    this.bibite= this.bibiteService.getAll();
    this.ordineService = ordineService;
    
  }

  ionViewDidLoad() {
    console.log('Hello BibitePage Page');
  }
  
  addBibita(bibita){
    this.ordineService.addBibita(bibita);
  }
  removeBibita(bibita){
    this.ordineService.removeBibita(bibita);
  }
  
  hasOrdineBibita(bibita){
    return this.ordineService.hasOrdineBibita(bibita);
  }
  howMuchBibiteInOrdine(bibita){
    return this.ordineService.howMuchBibitaInOrdine(bibita);
  }
  
  getPrice(bibita){
    return this.ordineService.howMuchBibitaInOrdine(bibita) * bibita.prezzo;
  }

}
