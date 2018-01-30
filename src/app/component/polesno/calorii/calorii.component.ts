import { Component, OnInit } from '@angular/core';
import { CaloriiFormModel } from '../../../core/models/input-models/calori-calc.models';
import { SeoServices } from '../../../core/service/seo.service';

@Component({
  selector: 'app-calorii',
  templateUrl: './calorii.component.html',
  styleUrls: ['./calorii.component.css']
})
export class CaloriiComponent implements OnInit {
  calcForm: CaloriiFormModel;
  hasCalory:Boolean = false;
  status:String;
  constructor(private seo: SeoServices) {
    this.seo.changeTitle("Калкулатор за нужни калории на ден - Магазин Красота и Здраве");
    this.seo.addMetaKeys('Bmi, Клакулатор, индекс, телесна маса, маса');
    this.seo.addMetaDescription("Специално за вас създадохме безплатен калкулато за нужните калории, които трябва да приемате на ден");
    this.seo.addFbMeta(
      "Калкулатор за нужни калории на ден",
     "Специално за вас създадохме безплатен калкулато за нужните калории, които трябва да приемате на ден",
     "./assets/imges/bmi.jpg",
    "http://magazin-zdrave.com/assets/imges/calc-calori.jpg"
    )
   }

  ngOnInit() {
    this.calcForm = new CaloriiFormModel('', '', 'Жена', '','Ниска дневна активност')
  }

  onClick(e) {
    e.preventDefault();
    let result:Number;
    let firstResult: Number = 0
    if(this.calcForm.gender === 'Жена') {
      firstResult = 55.1 + (Number(this.calcForm.weight) * 9.563) + 
             (1.850 * Number(this.calcForm.height))  + 
             (4.676 * Number(this.calcForm.age))
    } else  {
      firstResult = 66 + (Number(this.calcForm.weight) * 13.7) + 
      (5 * Number(this.calcForm.height))  + 
      (6.7 * Number(this.calcForm.age))
    }
    if(this.calcForm.activ="Ниска дневна активност") {
      result = Number(firstResult);
    } else if (this.calcForm.activ="Слаба дневна активнос") {
      result = Number(firstResult) * 1.375;
    }else if (this.calcForm.activ="Умерена дневна активност")  {
      result = Number(firstResult) * 1.55;
    } else {
      result = Number(firstResult) * 1.725;
    }
    this.hasCalory = true;
      result = Math.round(Number(result)*100)/100
     this.status = result.toFixed(2);
     console.log(result);
     console.log(this.status)

  }

}
