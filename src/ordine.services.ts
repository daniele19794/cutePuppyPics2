import { Pizza } from './pizza';
import { Bibita } from './bibite';
import { OrdineBibita } from './ordine';
import * as _ from 'underscore';


export class OrdineService {
    pizze: Pizza[]=[];
    bibiteOrdine: OrdineBibita[]=[];
    
    
  
    
    addBibita(bibita: Bibita){
    
      var index=-1;
      _.each(this.bibiteOrdine, function(b,i) {
          if(b.bibita.nome== bibita.nome){
            index =i;
          }
        });
      
      if(index != -1){
        this.bibiteOrdine[index].addBibita();
      }else{
        this.bibiteOrdine.push(new OrdineBibita(1,bibita));
      }
      
    }
    
    removeBibita(bibita: Bibita){
        var index=-1;
        _.each(this.bibiteOrdine, function(b,i) {
            if(b.bibita.nome== bibita.nome){
              index =i;
            }
          });
        
        if(index != -1){
          if(this.bibiteOrdine[index].quantita==1){
              this.bibiteOrdine.splice(index,1);
          }else{
              this.bibiteOrdine[index].removeBibita();
          }
          
        }
        
    }
    
    addPizza(pizza: Pizza){
    
      var pizzaClone = JSON.parse(JSON.stringify(pizza));
      pizzaClone.id= this.pizze.length;
      this.pizze.push(pizzaClone);
  
      
    }
    
    removePizza(pizza: Pizza){
      var index = -1;
      _.each(this.pizze, function(b,i) {
          if(_.isEqual(b,pizza)){
            index=i;
            return;
          }
        })
      
        this.pizze.splice(index,1);
      
      }

    
    hasOrdinePizza(pizza){
      var find= false;
      
      var index=-1;
      _.each(this.pizze, function(p,i) {
        if(_.isEqual(p,pizza)){
          find=true
          return;
        }
        });
        
        
        return find;
    }
    
    hasOrdineBibita(bibita){
      var find= false;
      
      _.each(this.bibiteOrdine, function(b) {
          if(b.bibita.nome== bibita.nome){
            find =true;
          }
      })
        
        
        return find;
    }
    
    howMuchBibitaInOrdine(bibita){
      let count= 0;
    
      _.each(this.bibiteOrdine, function(b) {
          if(b.bibita.nome== bibita.nome){
            count=b.quantita;
          }
      })
      
        
      return count;
    }
    
    howMuchBibiteInOrdine(){
      let count= 0;
      
      _.each(this.bibiteOrdine, function(b) {
            count=count +b.quantita;
      })
      
      return count;
    }
    
    howMuchPizzeInOrdine(){
      
      return this.pizze.length;
    }
    
    
    getBibiteOrdine(){
      return this.bibiteOrdine;
    }
    
    getPizzeStessoNomeInOrdine(pizza){
      
      var values =  _.filter(this.pizze, function(p){return p.nome == pizza.nome});
      
      return values;
    }
    
    getPizze(){
      return this.pizze;
    }
    
    
    
    calcolaTotale(){
      let totale: number=0;
      for (let i in this.pizze) {
          totale = this.pizze[i].prezzo + totale;
             
      }
      for (let i in this.bibiteOrdine) {
          totale = (this.bibiteOrdine[i].quantita * this.bibiteOrdine[i].bibita.prezzo) + totale;
             
      }
      return totale;
    }
    
    
}
  
