import { Pizza } from './pizza';
import { Bibita } from './bibite';
import { OrdineBibita } from './ordine';
import { OrdinePizza } from './ordine';
import * as _ from 'underscore';


export class OrdineService {
    pizze: Pizza[]=[];
    bibite: Bibita[]=[];
    
    bibiteOrdine: OrdineBibita[]=[];
    pizzeOrdine: OrdinePizza[]=[];
    
    
  
    
    addBibita(bibita: Bibita){
      //var bibitaClone = _.clone(bibita);
      // b.id= this.bibite.length;
      // this.bibite.push(b);
      //
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
      //var pizzaClone = _.clone(pizza);
      
      var pizzaClone = JSON.parse(JSON.stringify(pizza));

      // p.id= this.pizze.length;
      // this.pizze.push(p);
    //  console.log("addPizza");
      console.log("OrdineService.addPizza ordine inizio " + JSON.stringify(this.pizzeOrdine));
      var index = -1;
      _.each(this.pizzeOrdine, function(p,i) {
        if(_.isEqual(p.pizza,pizzaClone)){
          console.log("OrdineService Equals pizza  " + JSON.stringify(p.pizza));
          console.log("OrdineService a pizza  " + JSON.stringify(pizzaClone));
          
          index=i;
          return;
        }
      });
      
      if(index!=-1){
        
        this.pizzeOrdine[index].addPizza();
      }else{
        this.pizzeOrdine.push(new OrdinePizza(1,pizzaClone));
      }
      
      console.log("OrdineService.addPizza ordine fine " + JSON.stringify(this.pizzeOrdine));
      //pizza.nome="nomeModificato";
      //console.log("addPizza ordine fine 2" + JSON.stringify(this.pizzeOrdine));
      
    }
    
    removePizza(pizza: Pizza){
      // var index = -1;
      // _.each(this.pizze, function(b,i) {
      //     if(_.isEqual(b,pizza)){
      //       index=i;
      //       return;
      //     }
      //   })
      //
      //   this.pizze.splice(index,1);
      
      var index=-1;
      _.each(this.pizzeOrdine, function(p,i) {
        if(_.isEqual(p.pizza,pizza)){
          index=i;
          return;
        }
        });
      
      if(index != -1){
        if(this.pizzeOrdine[index].quantita==1){
            this.pizzeOrdine.splice(index,1);
        }else{
            this.pizzeOrdine[index].removePizza();
        }
        
      }

    }
    
    // isEquals(pizza1, pizza2){
    //   if(pizza1.nome== pizza2.nome &&)
    // }
    
    
    hasOrdinePizza(pizza){
      var find= false;
      
      var index=-1;
      _.each(this.pizzeOrdine, function(p,i) {
        if(_.isEqual(p,pizza)){
          find=true
          return;
        }
        });
        
        
        return find;
    }
    
    hasOrdineBibita(bibita){
      var find= false;
      // _.each(this.bibite, function(b) {
      //     if(b.nome== bibita.nome){
      //       find =true;
      //     }
      //   })
      
      _.each(this.bibiteOrdine, function(b) {
          if(b.bibita.nome== bibita.nome){
            find =true;
          }
      })
        
        
        return find;
    }
    
    howMuchBibitaInOrdine(bibita){
      let count= 0;
      // _.each(this.bibite, function(b) {
      //     if(b.nome== bibita.nome){
      //       count++;
      //     }
      //   })
        
      // _.each(this.bibite, function(b) {
      //     if(b.nome== bibita.nome){
      //       count++;
      //     }
      // })
      
      _.each(this.bibiteOrdine, function(b) {
          if(b.bibita.nome== bibita.nome){
            count=b.quantita;
          }
      })
      
      //console.log("bibite count " + count);
        
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
      let count= 0;
      
      _.each(this.pizzeOrdine, function(p) {
            count=count +p.quantita;
      })
      
      return count;
    }
    
    getBibite(){
      return this.bibite;
    }
    getBibiteOrdine(){
      return this.bibiteOrdine;
    }
    
    getPizzeStessoNomeInOrdine(pizza){
      
      var values =  _.filter(this.pizzeOrdine, function(p){return p.pizza.nome == pizza.nome});
      
      return values;
    }
    
    getPizze(){
      return this.pizze;
    }
    
    getPizzeOrdine(){
      return this.pizzeOrdine;
    }
    
    calcolaTotale(){
      let totale: number=0;
      for (let i in this.pizzeOrdine) {
          totale = (this.pizzeOrdine[i].pizza.prezzo * this.pizzeOrdine[i].quantita)+ totale;
             
      }
      for (let i in this.bibiteOrdine) {
          totale = (this.bibiteOrdine[i].quantita * this.bibiteOrdine[i].bibita.prezzo) + totale;
             
      }
      return totale;
    }
    
    
}
  
