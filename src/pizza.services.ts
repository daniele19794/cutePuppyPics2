import { Pizza } from './pizza';
import { IPizza } from './pizza';
import { Aggiunta } from './aggiunte';

import * as _ from 'underscore';


export class PizzaService {
  
  
  getByIdCategoria(idCategoria: string): Pizza[]{
    var pizze = _.where(this.getAll(), {idCategoria: idCategoria});
  
    return pizze;
  }
  
  getAll() : Pizza[] {
    return  PIZZE.map(p => this.clone(p));
  }
  
  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
  
  addAggiunta(pizza: Pizza,aggiunta: Aggiunta){
    if(pizza.aggiunte == null){
      pizza.aggiunte = new Array();
    }
    if(! _.contains(pizza.aggiunte,aggiunta)){
        pizza.aggiunte.push(aggiunta);
        
    }
  }
  removeAggiunta(pizza: Pizza, aggiunta: Aggiunta){
        let index = _.indexOf(pizza.aggiunte, aggiunta) ;
        pizza.aggiunte.splice(index);
  }
  
  addRimozione(pizza: Pizza, ingrediente: string){
    console.log("addRimozione");
    if(pizza.rimozioni == null){
        pizza.rimozioni = new Array();
    }
    
    pizza.rimozioni.push(ingrediente);
    console.log("addRimozione " + ingrediente + "  " + JSON.stringify(pizza));
  }
  
  isAggiuntaPresente(pizza: Pizza, aggiunta : Aggiunta){
    if(_.contains(pizza.aggiunte,aggiunta)){
        return true;
    }else{
      return false;
    }
  }
  
  isIngredienteRemoved(pizza: Pizza, ingrediente){
    if(_.contains(pizza.rimozioni,ingrediente)){
      return true;
    }else{
      return false;
    }
  }
  
  removeRimozione(pizza: Pizza, rimozione: string){
    console.log("remove rimozione " + rimozione + "  " + JSON.stringify(pizza));

    let index = _.indexOf(pizza.rimozioni, rimozione) ;
    pizza.rimozioni.splice(index);
  }
  
  setTipoPastaFinale(pizza: Pizza, tipoPasta: string){
    pizza.tipoPastaFinale = tipoPasta;
  }
  
  
  getLabelModifichePizza(pizza: Pizza){
    let label= "";
    let p = pizza;
    
    if(p.rimozioni != null){
      for (let entry of p.rimozioni) {
      
        label = label + " - " + entry;
      }
    }
    if(p.aggiunte != null){
      for (let entry of p.aggiunte) {
        label = label + " + " + entry.nome;
      }
    }
    if(p.tipoPastaFinale!= p.tipoPasta){
      label = label + " + pasta " + p.tipoPastaFinale;
    }
    
    if(p.doppiaPasta == true){
      label = label + " + doppia pasta ";
    }
    
    return label;
  }
  
  

}


const PIZZE : IPizza[] = [
  {
     nome:'Violetta',
     idCategoria:1,
     ingredienti:[
        'Fior di latte',
        'patate viola velvet queen',
        'tastasal'
     ],
     dopoCottura:[
        'pecorino romano'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     novita:true,
     piccante:false,
     prezzo:10.00
  },
  {
     nome:'A Mare',
     idCategoria:1,
     ingredienti:[
        'Pomodoro'
     ],
     dopoCottura:[
        'stracciatella',
        'peperoncino dolce lacrima',
        'gamberetti dei mari freddi',
        'menta fresca'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     novita:true,
     piccante:false,
     prezzo:10.00
  },
  {
     nome:'Angus',
     idCategoria:1,
     ingredienti:[
        'Pomodoro',
        'fior di latte'
     ],
     dopoCottura:[
        'carpaccio di Black Angus',
        'rucola',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:false,
     piccante:false,
     prezzo:9.00
  },
  {
     nome:'Mango',
     idCategoria:1,
     novita:false,
     ingredienti:[
        'Fior di latte',
        'ricotta vaccina'
     ],
     dopoCottura:[
        'Black Angus',
        'marmellata di arance e mango al profumo di menta'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     prezzo:10.00
  },
  {
     nome:'Norvegia',
     idCategoria:1,
     ingredienti:[
        'Crema di punte d\'asparago',
        'fior di latte',
        'olive taggiasche'
     ],
     dopoCottura:[
        'salmone affumicato',
        'panna'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
      novita:false,
     prezzo:10.00
  }
  ,
  {
     nome:'Verace',
     idCategoria:2,
     ingredienti:[
        'Pomodoro',
        'bufala'
     ],
     dopoCottura:[
        'salsa basilico'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
      novita:false,
     prezzo:7.50
  },
  {
     nome:'Mia Parmigiana',
     idCategoria:2,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'dadolata di melanzane al forno condite con sale e olio, gratinato'
     ],
     dopoCottura:[
       'Burrata pugliese',
       'salsa basilico'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
      novita:false,
     prezzo:10.00
  },
  {
     nome:'Sauris',
     idCategoria:2,
     ingredienti:[
        'Pomodoro 100% Italia'
     ],
     dopoCottura:[
        'Burrata pugliese',
        'pomodorini',
        'salsa basilico',
        'speck Sauris'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
      novita:false,
     doppiaPasta:false,
     prezzo:10.00
  },
  {
     nome:'Guanciale',
     idCategoria:2,
     ingredienti:[
        'Fior di latte',
        'crema di punte d\'asparago',
        'tartufo',
        'grana padano'
     ],
     dopoCottura:[
        'guanciale di cinta senese',
        'salsa basilico'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     prezzo:10.00
  },
  {
     nome:'Bell\'Italia',
     idCategoria:2,
     ingredienti:[
        'Fior di latte',
        'cipolla rossa di Tropea',
        'rucola',
        'pomodorini Confit addolciti',
        'olive Taggiasche',
        'acciughe del Mar Cantabrico (Spagna)'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     prezzo:10.00
  },
  {
     nome:'Golfo di Napoli',
     idCategoria:2,
     ingredienti:[
        'Bufala',
        'friarielli spadellati in oliio',
        'aglio e peperoncino',
        'tastasal casereccio',
        'grana padano'
     ],
     dopoCottura:[
        'olio piccante'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     piccante:true,
     prezzo:10.00
  },
  {
     nome:'Sapore del Sud',
     idCategoria:2,
     ingredienti:[
        'pomodoro',
        'bufala',
        'acciughe del Mar Cantabrico',
        'pomodorini Confit addolciti',
        'frutti del Cappero'
     ],
     dopoCottura:[
        'origano fresco'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     prezzo:10.00
  },
  {
     nome:'Amaretto',
     idCategoria:3,
     ingredienti:[
        'Fior di latte',
        'zucche alla griglia',
        'Asiago'
     ],
     dopoCottura:[
        'amaretti',
        'speck Sauris'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     prezzo:10.00
  },
  {
     nome:'Ortica',
     idCategoria:3,
     ingredienti:[
        'crema di ortica',
        'fior di latte',
        'ricotta',
        'noci'
     ],
     dopoCottura:[
        'lardo'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     novita:true,
     prezzo:10.00
  },
  {
     nome:'Audace',
     idCategoria:3,
     ingredienti:[
        'fior di latte',
        'crema di ceci',
        'guanciale croccante di cinta senese',
        'porro'
     ],
     dopoCottura:[
        'pecorina'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     novita:true,
     prezzo:10.00
  },
  {
     nome:'Abruzzo',
     idCategoria:3,
     ingredienti:[
        'Fior di latte',
        'gorgonzola',
        'pomodorini secchi'
     ],
     dopoCottura:[
        'sticks di polenta al forno',
        'prosciutto di agnello'
     ],
     tipoPasta:'verace',
     tipoPastaFinale:'verace',
     doppiaPasta:false,
     novita:true,
     prezzo:10.00
  },
  {
     nome:'Broccoli',
     idCategoria:4,
     ingredienti:[
        'pomorodo',
        'fior di latte',
        'broccoletti',
        'gorognzola',
        'Aggiughe del Mar Cantabrico'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:true,
     prezzo:10.00
  },
  {
     nome:'Polentona',
     idCategoria:4,
     ingredienti:[
        'pomodoro',
        'fior di latte',
        'polenta a dadini',
        'gorognzola'
     ],
     dopoCottura:[
        'lardo'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:false,
     prezzo:8.00
  },
  {
     nome:'Zuccona',
     idCategoria:4,
     ingredienti:[
        'pomodoro',
        'fior di latte',
        'zucca alla griglia',
        'salsiccia',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:false,
     prezzo:8.00
  },
  {
     nome:'Cacio',
     idCategoria:4,
     ingredienti:[
        'Fior di latte',
        'spinaci',
        'pancetta affumicata',
        'cacio e pepe'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:true,
     prezzo:9.00
  },
  {
     nome:'Trippa',
     idCategoria:4,
     ingredienti:[
        'Fior di latte, trippa alla parmigiana, grana padano, salvia'
     ],
    tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:true,
     prezzo:8.00
  },
  {
     nome:'Castagne',
     idCategoria:4,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'porro',
        'castagne'
     ],
     dopoCottura:[
        'lardo'
     ],
    tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:8.50
  },
  {
     nome:'Jobel',
     idCategoria:4,
     ingredienti:[
        'crema di ceci',
        'fior di latte',
        'cipolla rossa',
        'ricotta'
     ],
     dopoCottura:[
        'prosciutto d\'agnello'
     ],
    tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:true,
     prezzo:9.00
  },
  {
     nome:'Jobel',
     idCategoria:4,
     ingredienti:[
        'crema di ceci',
        'fior di latte',
        'cipolla rossa',
        'ricotta'
     ],
     dopoCottura:[
        'prosciutto d\'agnello'
     ],
    tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:true,
     prezzo:9.00
  },
  {
     nome:'Mandorla',
     idCategoria:4,
     ingredienti:[
        'fior di latte',
        'radicchio di Treviso',
        'mascarpone',
        
     ],
     dopoCottura:[
        'mandorle',
        'speck Sauris'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     novita:true,
     prezzo:9.00,
  },
  {
     nome:'Intensa',
     idCategoria:5,
     ingredienti:[
        'Bufala',
        'melanzane',
        'funghi freschi',
        'pomodorini secchi',
        'salamino',
        'grana padano'
     ],
     dopoCottura:[
        'salsa basilico'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:8.00
  },
  {
     nome:'Estate',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'pomodorini',
        'grana padano'
     ],
     dopoCottura:[
        'salsa basilico'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Estate Gratinata',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'pomodorini',
        'gratinato'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Delicata',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'zucchine',
        'gratinato',
        'stracchino'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Pedro Pè',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'spinaci',
        'misto bosco',
        'salamino',
        'brie',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Giuly',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'zucchine',
        'philadelphia',
        'scamorza',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Valtellina',
     idCategoria:5,
     ingredienti:[
        'Fior di latte'
     ],
     dopoCottura:[
        'bresaola',
        'rucola',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Pistacchi',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'pistacchi',
        'scamorza'
     ],
     dopoCottura:[
        'speck'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:8.00
  },
  {
     nome:'Miele e Noci',
     idCategoria:5,
     ingredienti:[
        'Fior di latte',
        'noci',
        'gorgonzola'
     ],
     dopoCottura:[
        'miele'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Inverno',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'radicchio',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:5.50
  },
  {
     nome:'Treviso',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'radicchio di Treviso',
        'brie'
     ],
     dopoCottura:[
        'lardo'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Verona',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'radicchio'
     ],
     dopoCottura:[
        'Asiago',
        'riduzione d\'Amarone'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Messico',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'fagioli',
        'pancetta affumicata'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Mari',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'ricotta'
     ],
     dopoCottura:[
        'prosciutto',
        'grana padano',
        'pepe nero'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Burrata',
     idCategoria:6,
     ingredienti:[
        'Pomodoro'
     ],
     dopoCottura:[
        'burrata pugliese',
        'crudo di Parma'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:9.00
  },
  {
     nome:'Italiana',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'bufala',
        'pomodorini'
     ],
     dopoCottura:[
        'salsa basilico'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Papavero',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'zucchine',
        'gorgonzola',
        'semi di papavero'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Lopez',
     idCategoria:6,
     ingredienti:[
        'Pomodro',
        'emmenthal',
        'peperoni',
        'gorgonzola',
        'salamino',
        'grana padano',
        'origano'
     ],
     dopoCottura:[
        'speck'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Drago',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'peperoni',
        'cipolla',
        'capperi',
        'acciughe',
        'salamino',
         'origano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Casa',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'prosciutto',
        'funghi',
        'gorgonzola',
        'salsiccia'
     ],
     dopoCottura:[
        'crudo di Parma'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Gigi',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'radicchio',
        'porcini',
        'salamino',
        'brie',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Paolo',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'chiodini',
        'porcini',
        'tartufo',
        'scamorza'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Ale',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'bufala',
        'acciughe',
        'capperi',
        'peperoncino'
     ],
     dopoCottura:[
        'pomodorini',
        'rucola'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     piccante:true,
     prezzo:7.50
  },
  {
     nome:'Circe',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'pomodorini secchi',
        'brie'
     ],
     dopoCottura:[
        'pancetta arrotolata'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.50
  },
  {
     nome:'Cipollina',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'chiodini',
        'Asiago',
        'erba cipollina fresca'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Mio Zio (Doppia Pasta)',
     idCategoria:6,
     ingredienti:[
        'Pomodoro',
        'bufala',
        'nduia calabrese',
        'ricotta fresca'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     piccante:true,
     prezzo:9.00
  },
  {
     nome:'Marinara',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'olio all\'aglio',
        'origano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:3.50
  },
  {
     nome:'Margherita',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:4.00
  },
  {
     nome:'Romana',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'acciughe',
        'origano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:5.00
  },
  {
     nome:'Napoletana',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'acciughe',
        'capperi',
        'origano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:5.50
  },
  {
     nome:'Prosciutto e Funghi',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'prosciutto',
        'funghi'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.00
  },
  {
     nome:'Super Gino',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'prosciutto',
        'funghi',
        'wurstel'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Tonno Cipolla',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'cipolla',
        'tonno',
        'origano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.00
  },
  {
     nome:'Capricciosa',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'prosciutto',
        'funghi',
        'carciofi',
        'capperi',
        'acciughe'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'4 Stagioni',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'carciofi',
        'prosciutto',
        'funghi',
        'acciughe'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'4 Formaggi',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di late',
        'emmenthal',
        'gorgonzola',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Boscaiola',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'funghi misti'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:5.00
  },
  {
     nome:'Ricotta Spinaci',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'ricotta',
        'spinaci'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Vegetariana',
     idCategoria:7,
     ingredienti:[
        'Pomodro',
        'fior di latte',
        'verdure miste di stagione (peperoni su richiesta)'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Philadelphia Speck',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'philadelphia'
     ],
     dopoCottura:[
        'speck'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:7.00
  },
  {
     nome:'Carbonara',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'pancetta affumicata',
        'uovo'
     ],
     dopoCottura:[
       'grana padano',
       'pepe, nero'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Rustica',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'patate',
        'rosmarino'
     ],
     dopoCottura:[
        'pancetta arrotolata'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Gamberetti Rucola',
     idCategoria:7,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'gamberetti'
     ],
     dopoCottura:[
        'rucola'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Calzone',
     idCategoria:8,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'prosciutto',
        'funghi',
        'ricotta'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Calzone Vegetariano',
     idCategoria:8,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'verdure miste di stagione'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  },
  {
     nome:'Calzone ai Formaggi',
     idCategoria:8,
     ingredienti:[
        'Pomodoro',
        'fior di latte',
        'emmenthal',
        'ricotta',
        'grana padano'
     ],
     tipoPasta:'normale',
     tipoPastaFinale:'normale',
     doppiaPasta:false,
     prezzo:6.50
  }
];
