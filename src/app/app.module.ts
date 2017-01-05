import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PizzePage } from '../pages/pizze/pizze';
import { ModifyPizzaPage } from '../pages/modifyPizza/modifyPizza';
import { ModifyPage } from '../pages/modify/modify';
import { OrdinePage } from '../pages/ordine/ordine';
import { BibitePage } from '../pages/bibite/bibite';
import { TabsPage } from '../pages/tabs/tabs';
import { PizzaService } from '../pizza.services';
import { AggiunteService } from '../aggiunte.services';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PizzePage,
    ModifyPizzaPage,
    TabsPage,
    OrdinePage,
    BibitePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PizzePage,
    ModifyPizzaPage,
    TabsPage,
    OrdinePage,
     BibitePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},PizzaService,AggiunteService]
})
export class AppModule {
  
  
}
