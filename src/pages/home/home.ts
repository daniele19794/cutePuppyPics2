import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PizzaService } from '../../pizza.services';
import { Pizza } from '../../pizza';
import { PizzePage } from '../pizze/pizze';
import { BibitePage } from '../bibite/bibite';
import { Bibita } from '../../bibite';
import { BibiteService } from '../../bibite.services';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    pizze: Pizza[] = [];
  

    constructor(public navCtrl: NavController, private _pizzaService: PizzaService) {
        this.pizze = <Pizza[]>_pizzaService.getAll();
      

    }

    vaiAPizze(idCategoria: number, nomeCategoria: string) {
      this.navCtrl.push(PizzePage, {
        idCategoria: idCategoria,
        nomeCategoria: nomeCategoria
      });
    }
    vaiABibite(){
      this.navCtrl.push(BibitePage, {
        
      });
    }
    
    slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}
