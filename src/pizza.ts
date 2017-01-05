
import { Aggiunta } from './aggiunte';
import * as _ from 'underscore';


export interface IPizza {
  nome: string;
  idCategoria: number;
  ingredienti: string[] ;
  dopoCottura?: string[];
  tipoPasta: string;
  tipoPastaFinale: string;
  doppiaPasta: boolean;
  novita?: boolean;
  piccante?: boolean;
  prezzo: number;
  aggiunte?: Aggiunta[];
  rimozioni?: string[];
}

 export class Pizza implements IPizza{
   nome: string;
   idCategoria: number;
   ingredienti: string[] ;
   dopoCottura?: string[];
   tipoPasta: string;
   tipoPastaFinale: string;
   doppiaPasta: boolean;
   novita?: boolean;
   piccante?: boolean;
   prezzo: number;
   aggiunte?: Aggiunta[];
   rimozioni?: string[];
   
  constructor(ipizza: IPizza){
    this.nome=ipizza.nome;
    this.ingredienti=ipizza.ingredienti;
    this.prezzo=ipizza.prezzo;
    this.aggiunte = new Array();
    this.rimozioni = new Array();
    this.tipoPastaFinale=ipizza.tipoPastaFinale;
    this.tipoPasta=ipizza.tipoPasta;
  }
  
  
  
  
  
}
  
