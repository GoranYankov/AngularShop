import { Component, OnInit } from '@angular/core';
import { BMIFormModel } from '../../../core/models/input-models/bmi-calc.models';
import { ProductServices } from '../../../core/service/product.service';
import { SeoServices } from '../../../core/service/seo.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  bmiForm: BMIFormModel;
  hasBmi: Boolean = false;
  bmiIndex: Number = 0;
  status: String;
  text: string;
  products: Array<Object>;
  constructor(private http: ProductServices, private seo: SeoServices) {
    this.seo.changeTitle("Индекс на телесната маса (BMI) - Магазин Красота и Здраве");
    this.seo.addMetaKeys('Bmi, Клакулатор, индекс, телесна маса, маса');
    this.seo.addMetaDescription("Специално за вас създадохме безплатен калкулато за Индекс на телесната маса (BMI)");
    this.seo.addFbMeta(
      "Индекс на телесната маса (BMI) - Магазин Красота и Здраве",
     "Специално за вас създадохме безплатен калкулато за Индекс на телесната маса (BMI)",
     "./assets/imges/bmi.jpg",
    "http://magazin-zdrave.com/polesno/bmi"
    )
   }

  ngOnInit() {
    this.bmiForm = new BMIFormModel('', '', 'Жена');
  }

  onClick(e) {
    e.preventDefault();
    let weight = Number(this.bmiForm.weight);
    let height =  Math.pow(Number(this.bmiForm.height)/100,2)
    if (this.bmiForm.gender==="Жена") {
      height = height - 0.5;

   }
    let bmi = (weight/ height);
    let result = Math.round(bmi * 100)/100;
    
    if (isNaN(result) || result <= 10) {
       this.hasBmi = false;
    } else {
     this.hasBmi = true;
      this.bmiIndex = result;
      if(result <= 18.5) {
        this.products = [];
        this.status = 'Поднормено тегло'
        this.text = 'Килограмите Ви са под-нормалните. Препоръчваме Ви да наблегнете на високо калорични храни.'
      } else if (result > 18.5 && result <= 25) {
        this.products = [];
        this.status = 'Нормално тегло';
        this.text = "Поздравления! Вие се намирате в чудесна форма!"
      }  else if (result > 25 && result < 30) {
        this.http.getProductByTag({'tag':'отслабване'}).subscribe(products=> {
              this.products = products['products'];
              console.log(products);
             this.status = 'Предзатлъстяване';
             this.text = "Внимание! Вашите килограми са в повече. Препоръчваме Ви да намалите консумацията на сладки изделия! Повишете ежедневната си активност."
         })
      } else {
        this.http.getProductByTag({'tag':'отслабване'}).subscribe(products=> {
          console.log(products);
          this.products = products['products'];
        this.status = 'Затлъстяване';
        this.text = "Внимание! Обърнете сериозно внимание на вашата фигура. Затлъстяването е сериозен проблем!"
      })
      }
    }
    


  }

}
