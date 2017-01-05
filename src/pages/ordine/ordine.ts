import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdineService } from '../../ordine.services';
import { NavParams } from 'ionic-angular';
import { PizzaService } from '../../pizza.services';
import * as _ from 'underscore';
import { Pizza } from '../../pizza';
import { OrdineBibita } from '../../ordine';
import { OrdinePizza } from '../../ordine';

import { Bibita } from '../../bibite';

import { ModifyPizzaPage } from '../modifyPizza/modifyPizza';



/*
  Generated class for the Ordine page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ordine',
  templateUrl: 'ordine.html'
})
export class OrdinePage {

  pizze: Pizza[];
  bibite: Bibita[];
  bibiteOrdine: OrdineBibita[];
  pizzeOrdine: OrdinePizza[];
  pizzaService: PizzaService;

  constructor(public navCtrl: NavController ,private navParams: NavParams,   private ordineService: OrdineService) {
    this.pizzaService =  new PizzaService();
    this.pizze = this.ordineService.getPizze();
    this.bibite = this.ordineService.getBibite();
    this.bibiteOrdine = this.ordineService.getBibiteOrdine();
    this.pizzeOrdine = this.ordineService.getPizzeOrdine();
    console.log("Ordine page trovate " + this.pizzeOrdine.length);
  }
  
  prova(){
    var values  =_.groupBy(this.bibite, 'nome');
    // console.log("prova groupBy " + JSON.stringify(values));
    console.log("bibite size " + this.bibite.length);
    
    
    
  }
  
  ionViewDidLoad() {
     
    console.log('Hello OrdinePage Page');
      this.prova();
  }
  isOrdineVuoto(){
    return this.ordineService.howMuchBibiteInOrdine()>0 || this.pizzeOrdine.length>0;
  }
  
  getLabelModifichePizza(pizza: Pizza){
    return this.pizzaService.getLabelModifichePizza(pizza);
  }
  
  getLabelTotale(){
    var labelPizze = this.ordineService.howMuchPizzeInOrdine() + " Pizze" ;
    var labelBibite = this.ordineService.howMuchBibiteInOrdine() + " Bibite" ;
    
    var labelTotale="";
    if(this.pizzeOrdine.length!=0){
      labelTotale = labelPizze;
    }
    if(this.bibiteOrdine.length!=0){
      if(labelTotale.length!=0){
        labelTotale =  labelTotale + " + " +  labelBibite;
      }else{
          labelTotale =  labelBibite;
      }
    }
    
  
    return labelTotale;
    
  }
  getLabelPrezzoTotale(){
    return this.ordineService.calcolaTotale();
  }
  
  modifyPizza(pizza){
    console.log("modifica pizza");
    this.navCtrl.push(ModifyPizzaPage, {
      pizza: pizza
    });
  }
  
  removePizza(pizza){
    this.ordineService.removePizza(pizza);
  }
  
  addBibita(bibita){
    this.ordineService.addBibita(bibita.bibita);
  }
  removeBibita(bibita){
    this.ordineService.removeBibita(bibita.bibita);
  }
  
  

}
