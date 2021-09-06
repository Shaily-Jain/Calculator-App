import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public num1 : number ;
  public num2: number;
  public result: number;

  constructor(public alertController :  AlertController) {
  }

  async Add() {
    // this.num1 = first;
    // this.num2 = second;

     this.result = (this.num1 + this.num2);
     console.log(this.result);
    
  }

  async Sub() {

      this.result = (this.num1 - this.num2);
      console.log(this.result);
  }

  async Multi() {

      this.result = (this.num1 * this.num2);
      console.log(this.result);
  }

  async Div() {

    if (this.num2 === 0) {
      const alert = await this.alertController.create({
        header: 'Invalid Input!!',
        subHeader : 'Please Enter Valid Input!!',
        message: ' Infinite Value Return!!',
        buttons: [{
          text: 'Okay',
          handler: () => { console.log('Okay Button Is Pressed!!'); }
        }]
      });
      alert.present();
    }
    else {
      this.result = (this.num1 / this.num2);
    }
    console.log(this.result);
  }
}
