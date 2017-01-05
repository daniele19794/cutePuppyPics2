import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OrdinePage } from '../ordine/ordine';
import { AboutPage } from '../about/about';
import { BibitePage } from '../bibite/bibite';

import { OrdineService } from '../../ordine.services';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = ModifyPizzaPage;
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = OrdinePage;
  
  

  constructor(public ordineService: OrdineService) {
    
    
  }
  
  getTotaleOrdine(){
    return this.ordineService.howMuchPizzeInOrdine() + this.ordineService.howMuchBibiteInOrdine();
  }
  
  
  
}
