import { Bibita } from './bibite';
import { IBibita } from './bibite';
import { Aggiunta } from './aggiunte';

import * as _ from 'underscore';


export class BibiteService {
  
  getAll() : Bibita[] {
    return  BIBITE.map(p => this.clone(p));
  }
  
  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }
  

}


const BIBITE : IBibita[] = [
        {
           "categoria":"Bibite Analcoliche",
           "tipo":"bibita",
           "nome":"Tè al limone",
           "quantita":0.355,
           "prezzo":2.50,
           "descrizione":"Incluso di pregiate foglie di tè nero Darjeeling artiglianale, succo di limone, zucchero di canna, zucchero caramellato, in acqua minerale Galvanina"
        },
        {
                "categoria":"Bibite Analcoliche",
                "tipo":"bibita",
                 "nome":"Tè alla pesca",
                 "quantita":0.355,
                 "grado":"",
                 "prezzo":2.50,
                 "descrizione":"Infuso di pregiate foglie di tè nero Darjeeling artiginale, succo di pesca, succo di limone zucchero di canna, zucchero caramellizzato, in acqua minerale Galvanina."
              },
              {
                "categoria":"Bibite Analcoliche",
                "tipo":"bibita",
                 "nome":"Coca-cola (Bottiglia in vetro)",
                 "quantita":0.330,
                 "grado":"",
                 "prezzo":2.00,
                 "descrizione":""
              },
              {
                "categoria":"Bibite Analcoliche",
                "tipo":"bibita",
                 "nome":"Coca-cola Zero (Bottiglia in vetro)",
                 "quantita":0.330,
                 "grado":"",
                 "prezzo":2.00
              },
              {
                "categoria":"Bibite Analcoliche",
                "tipo":"bibita",
                 "nome":"Fanta (Bottiglia in vetro)",
                 "quantita":0.330,
                 "grado":"",
                 "prezzo":2.00,
                 "descrizione":""
              },
        {
           "categoria":"Engel",
           "tipo":"birra",
                 "nome":"Premium Pils",
                 "quantita":0.50,
                 "grado":"4,9%",
                 "prezzo":3.50,
                 "descrizione":"Birra bionda tipo pils, fresca ed elegante, dal sapore luppolato tipico tedesco"
              },
              {
                "categoria":"Engel",
                "tipo":"birra",
                 "nome":"Keller Hell",
                 "quantita":0.50,
                 "grado":"5,4%",
                 "prezzo":3.50,
                 "descrizione":"Birra bionda non filtrata, piacevole con retrogusto dolce e speciale per i suoi profumi"
              },
              {
                "categoria":"Engel",
                "tipo":"birra",
                 "nome":"Keller Dunkel",
                 "quantita":0.50,
                 "grado":"5,3%",
                 "prezzo":3.50,
                 "descrizione":"Birra rossa non filtrata, con retrogusto amarognolo e tostato, speciale per i suoi profumi"
              },
           
        {
           "categoria":"Aynger",
           "tipo":"birra",
                 "nome":"Lager Hell",
                 "quantita":0.50,
                 "grado":"4,9%",
                 "prezzo":3.50,
                 "descrizione":"Colore oro-giallo con un leggero sentore di malto. Ha un gusto particolarmente pieno con un carattere morbido maltato"
              },
              {
                "categoria":"Aynger",
                "tipo":"birra",
                 "nome":"Ur-Weisse",
                 "quantita":0.50,
                 "grado":"5,8%",
                 "prezzo":3.50,
                 "descrizione":"Specialità di birra Weizen, con malto d'orzo e malto di frumento. Secondo l'usanza birraia dell'antica Baviera non è filtrata e quindi torbida"
              },
              {
                "categoria":"Aynger",
                "tipo":"birra",
                 "nome":"Brau-Weisse",
                 "quantita":0.50,
                 "grado":"5,1%",
                 "prezzo":3.50,
                 "descrizione":"Il colore è paglierino, è torbida (non filtrata) e piena di sapori delicati e fruttati, dovuto al malto di frumento, frizzante e rinfrescante, ha un'alta fermentazione e una inconfondibile e sottile fragranza di banana. Gusto leggero e con l'amaro appena percettibile"
              },
        {
           "categoria":"Theresianer",
           "tipo":"birra",
                 "nome":"Premium Larger",
                 "quantita":0.33,
                 "grado":"4,8%",
                 "prezzo":2.50,
                 "descrizione":"Avvolta tra la freschezza del luppolo e le note impalpabili dei lieviti. La sua anima è dolce, amara, morbida e seducente perchè nata dai migliori orzi distici di primavera"
              },
              {"categoria":"Theresianer",
              "tipo":"birra",
                 "nome":"Premium Pils",
                 "quantita":0.33,
                 "grado":"5,0%",
                 "prezzo":2.50,
                 "descrizione":"Deriva dall'orzo distico con la scorza particolarmente fine e luppoli Saaz, dall'aroma delicatissimo. Profumo intenso di luppolo. Gusto secco, con note di cereale e luppolo"
              },
              {
                "categoria":"Theresianer",
                "tipo":"birra",
                 "nome":"Vienna",
                 "quantita":0.33,
                 "grado":"5,3%",
                 "prezzo":2.50,
                 "descrizione":"Deriva dalla capitale asburgica dove è nata all'inizio del Novecento, crea un perfetto equilibrio tra malto e luppolo. Colore ramato per via delle sue note fruttate che si lasciano sedurre dal caramello. Così naturale e mai eccessiva"
              },
              {
                "categoria":"Theresianer",
                "tipo":"birra",
                 "nome":"Pale Ale",
                 "quantita":0.33,
                 "grado":"6,5%",
                 "prezzo":2.50,
                 "descrizione":"Grazie alla lunga maturazione, un duplice risultato: un aroma con i suoi sentori di fiori e agrumi, ed un'amarezza decisa che però tende a svanire. Profumo intenso, aromatico, speziato. Gusto deciso, ricco, complesso"
              },
              {
                "categoria":"Theresianer",
                "tipo":"birra",
                 "nome":"Strong Ale",
                 "quantita":0.33,
                 "grado":"8,5%",
                 "prezzo":2.50,
                 "descrizione":"Deriva solo da malti selezionati di prima scelta; solo acenti di liquirizia e note di frutta secca, intrecciate con il caffè tostato. Con un gradevole retrogusto di luppolo, dal colore rosso ambrato acceso, scoprirete la sua dolcezza"
              },
           
        {
           "categoria":"Pyraser Bier",
           "tipo":"birra",
                "nome":"Pyraser RotBier",
                 "quantita":0.50,
                 "grado":"4,6%",
                 "prezzo":3.50,
                 "descrizione":"La Pyraser RotBier è proprio l'espressione dell'arte birraia della Franconia. In questa regione la birra rossa ha una lunga tradizione che risale già al Medioevo. La Birreria Pyraser ha quindi deciso di riproporre l'antica ricetta alla base di questa tradizione"
            }
           
];
