
import * as _ from 'underscore';


export interface IBibita {
  categoria: string;
  tipo: string;
  nome: string;
  quantita: number;
  prezzo: number;
  descrizione?: string;
  grado?: string;
  
}



 export class Bibita implements IBibita{
   categoria: string;
   tipo: string;
   nome: string;
   quantita: number;
   prezzo: number;
   descrizione?: string;
   grado?: string;
   
  constructor(bibita: IBibita){
    this.categoria=bibita.categoria;
    this.tipo=bibita.tipo;
    this.nome = bibita.nome;
    this.quantita = bibita.quantita;
    this.prezzo=bibita.prezzo;
    this.descrizione=bibita.descrizione;
    this.grado= bibita.grado;
  }
  


}
  
