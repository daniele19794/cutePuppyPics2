import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../pizza.services';
import { OrdineService } from '../../ordine.services';
import { AggiunteService } from '../../aggiunte.services';
import * as _ from 'underscore';


import { Pizza } from '../../pizza';
import { Aggiunta } from '../../Aggiunte';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'modifyPizza.html'
})
export class ModifyPizzaPage {

    pizza: Pizza;
    aggiunte: Aggiunta[];
    pizzaService: PizzaService;
    //ordineService: OrdineService;

    constructor(public navCtrl: NavController,private navParams: NavParams, private ordineService: OrdineService,private aggiunteService: AggiunteService) {
        // this.pizze = _pizzaService.getAll();
        console.log("new ModifyPizzaPage");
        //this.pizza= navParams.get('pizza');
        this.pizza = JSON.parse(JSON.stringify(navParams.get('pizza')));
        this.aggiunte= aggiunteService.getAll();
        this.pizzaService = new PizzaService();
        
        //this.pizza.nome="modificato";
        console.log("modificapizzapage.constructor " + JSON.stringify(ordineService.getPizzeOrdine()));
        
    }
    
    addAggiunta(aggiunta:  Aggiunta){
      console.log(aggiunta.nome);
      this.ordineService.removePizza(this.pizza);
      //this.ordineService.addPizza(pizza);
      this.pizzaService.addAggiunta(this.pizza,aggiunta);
      this.ordineService.addPizza(this.pizza);
      
    }
    removeAggiunta(aggiunta:  Aggiunta){
      console.log(aggiunta.nome);
      this.ordineService.removePizza(this.pizza);
      //this.ordineService.addPizza(pizza);
      this.pizzaService.removeAggiunta(this.pizza,aggiunta);
      this.ordineService.addPizza(this.pizza);
    }
    
    isAggiuntaPresente(aggiunta : Aggiunta){
      return this.pizzaService.isAggiuntaPresente(this.pizza,aggiunta);
    }
    
    isIngredienteRemoved(ingrediente){
      return this.pizzaService.isIngredienteRemoved(this.pizza,ingrediente);
    }
    
    removeIngrediente(ingrediente: string){
      console.log("removeIngrediente rimuovi " + ingrediente);
      //console.log("pizza prima " + JSON.stringify(this.pizza));
      console.log("removeIngrediente ordine  inizio " + JSON.stringify(this.ordineService.getPizzeOrdine()));
      
      this.ordineService.removePizza(this.pizza);
      console.log("removeIngrediente ordine  dopo rimozione " + JSON.stringify(this.ordineService.getPizzeOrdine()));
      
      this.pizzaService.addRimozione(this.pizza,ingrediente);
      
      this.ordineService.addPizza(this.pizza);
      console.log("removeIngrediente ordine  fine " + JSON.stringify(this.ordineService.getPizzeOrdine()));
      
      //console.log("pizza dopo " + JSON.stringify(this.pizza));
      console.log("removeIngrediente ordine  fine " + JSON.stringify(this.ordineService.getPizzeOrdine()));
    }
    addIngrediente(ingrediente: string){
      console.log("aggiungi " + ingrediente);
      this.ordineService.removePizza(this.pizza);
      this.pizzaService.removeRimozione(this.pizza,ingrediente);
      this.ordineService.addPizza(this.pizza);
      console.log(JSON.stringify(this.pizza));
    }
    
    getLabelModifichePizza(pizza: Pizza){
       let label =this.pizzaService.getLabelModifichePizza(pizza);
       if(label.length > 0){
         label = ": " + label;
       }
       return label;
    }
      
    setTipoPastaFinale(tipoPasta: string){
        this.ordineService.removePizza(this.pizza);
        this.pizzaService.setTipoPastaFinale(this.pizza,tipoPasta);
        this.ordineService.addPizza(this.pizza);
    }
    
    isTipoPasta(tipoPasta){
    
        
      if(this.pizza.tipoPastaFinale != ""){
        if(this.pizza.tipoPastaFinale == tipoPasta){
          return true;
        }
      }else{
        if(this.pizza.tipoPasta== tipoPasta){
          return true;
        }
      }
      return false;
    }
    
    setDoppiaPasta(){
      this.ordineService.removePizza(this.pizza);
      //this.pizzaService.setDoppiaPasta();
      this.ordineService.addPizza(this.pizza);
    }
    
  //   searchAggiunte(ev: any) {
  //   // Reset items back to all of the items
  //   this.aggiunte= this.aggiunteService.getAll();
  //
  //   // set val to the value of the searchbar
  //   let val = ev.target.value;
  //
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.aggiunte = this.aggiunte.filter((aggiunta) => {
  //       return (aggiunta.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }



}
