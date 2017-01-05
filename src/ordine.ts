
import { Bibita } from './bibite';
import { Pizza } from './pizza';
import * as _ from 'underscore';


export class OrdinePizza {
    quantita: number=0;
    pizza: Pizza;
  
    constructor(quantita: number, pizza: Pizza){
      
      this.pizza=pizza;
      this.quantita= quantita;
    }
    
    addPizza(){
      this.quantita = this.quantita+ 1;
    }
    
    removePizza(){
      this.quantita = this.quantita- 1;
    }
 }

 export class OrdineBibita {
     quantita: number=0;
     bibita: Bibita;
   
     constructor(quantita: number, bibita: Bibita){
        this.bibita= bibita;
        this.quantita = quantita;
     }
     
     addBibita(){
       this.quantita = this.quantita+ 1;
     }
     
     removeBibita(){
       this.quantita = this.quantita- 1;
     }
     
  }
