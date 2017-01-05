import { Injectable } from '@angular/core';
import { TipoPizza } from './tipoPizza';


@Injectable()
export class TipoPizzaService {




  getAll() : TipoPizza[] {
    
    
    
    return [
      {name: 'Luke Skywalker', descrizione: 177, id: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }

}
