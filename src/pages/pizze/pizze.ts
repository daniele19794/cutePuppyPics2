import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../pizza.services';
import { OrdineService } from '../../ordine.services';
import { Pizza } from '../../pizza';
import { NavParams } from 'ionic-angular';
import { ModifyPizzaPage } from '../modifyPizza/modifyPizza';
import { ModifyPage } from '../modify/modify';
import * as _ from 'underscore';



@Component({
    selector: 'page-home',
    templateUrl: 'pizze.html'
})
export class PizzePage {

    pizze: Pizza[];
    pizzaService: PizzaService;
    nomeCategoria: string;
    idCategoria: string;
    showSearchBar=false;
  

    constructor(public navCtrl: NavController,private navParams: NavParams,  private ordineService: OrdineService) {
        // this.pizze = _pizzaService.getAll();
        console.log("new PizzaPage " +navParams.get('idCategoria'));
        
        let idCategoria = navParams.get('idCategoria');
         this.nomeCategoria = navParams.get('nomeCategoria');
     
        this.pizzaService = new PizzaService();
        this.idCategoria= idCategoria;
        this.pizze = this.pizzaService.getByIdCategoria(idCategoria);
        this.ordineService = ordineService;
        
        
        console.log("pizze " + this.pizze.length);

    }
    
    setShowSearchBar(){
      if(this.showSearchBar==false){
        this.showSearchBar=true
      }else{
        this.showSearchBar=false
      }
    }
    
    addPizza(pizza:  Pizza){
    
      this.ordineService.addPizza(pizza);
    
    }
    removePizza(pizza:  Pizza){
      
      this.ordineService.removePizza(pizza);
    }
    
    modifyPizza(pizza:  Pizza){
      console.log("modifica pizza");
      this.navCtrl.push(ModifyPizzaPage, {
        pizza: pizza
      });
    }
    
    formatArray(valori: string[]){
      let stringaFormattata="";
      let i=0;
      for (let v in valori) {
          if(i==0){
            stringaFormattata= valori[v];
          }else{
            stringaFormattata= stringaFormattata + ", " + valori[v];
          }
        i++;
      }
      return stringaFormattata;
    }
    
    
    pizzeNellOrdine(pizza: Pizza){
      
      return this.ordineService.getPizzeStessoNomeInOrdine(pizza);
    }
    
    isPizzaInOrdine(pizza){
      return this.ordineService.hasOrdinePizza(pizza);
    }
    
    getLabelModifichePizza(pizza: Pizza){
      return this.pizzaService.getLabelModifichePizza(pizza);
    }
    
    searchPizza(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();
    this.pizze = this.pizzaService.getByIdCategoria(this.idCategoria);

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      let pizzeFiltrate=[];
      for (let p in this.pizze) {
        let currentPizza = this.pizze[p];
        if((currentPizza.nome.toLowerCase().indexOf(val.toLowerCase()) > -1)){
          pizzeFiltrate.push(currentPizza);
          break;
        }
        for(let i in currentPizza.ingredienti){
          if(currentPizza.ingredienti[i].toLowerCase().indexOf(val.toLowerCase()) > -1){
            pizzeFiltrate.push(currentPizza);
            break;
          }
        }
        for(let i in currentPizza.dopoCottura){
          if(currentPizza.dopoCottura[i].toLowerCase().indexOf(val.toLowerCase()) > -1){
            pizzeFiltrate.push(currentPizza);
          }
        }
      
      }
      this.pizze=pizzeFiltrate;
      
    }
  }



}
