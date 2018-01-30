import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from '../../core/service/product.service';
import { FastOrderFormModel } from '../../core/models/input-models/fast-order-form.models';
import { OrderServices } from '../../core/service/order.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { SeoServices } from '../../core/service/seo.service';
import {delivaryTo} from '../../config/delivary.config'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  findProduct:Boolean = false;
  product;
  realPrice:Number;
  qty = 1;
  description:Boolean = true;
  content:Boolean = false;
  upotreba:Boolean = false;
  orderForm: FastOrderFormModel;
  delviaryPrice = delivaryTo.address;
  phoneNumber:String;
  orderPrice;
  ClassContent = 'no-active';
  ClassUpotreba = 'no-active';
  ClassDescription = 'active';
 

  constructor(private router: ActivatedRoute,
     private http: ProductServices,
    private order: OrderServices,
    private redirect: Router,
    private msg: FlashMessagesService,
    private seo: SeoServices,
  ) {
    let url = this.router.snapshot.params['url'];
    this.http.getSinelProduct({'url':url}).subscribe(product=>{
      if(product['success']) {
          this.findProduct = true;
          this.product = product['product'];
          this.realPrice = this.product.price;
          this.seo.changeTitle(this.product['type'] + ' ' + this.product['title'] + ' - Магазин Красота и Здраве')
          this.seo.addFbMeta(product['product']["type"] + ' ' + product['product']["title"] +  ' - Магазин Красота и Здраве' , product['product']['description'], product['product']['img'], window.location.href);    
          this.orderPrice = this.product['price'] + this.delviaryPrice;
      } 
    })
   }


  ngOnInit() {
    window.scrollTo(0, 0)
    this.phoneNumber = delivaryTo['phone'];
    this.orderForm = new FastOrderFormModel('','','','','Адрес','');
  }

  incrase() {
    if(this.qty !== 10) {
      this.qty = this.qty + 1;
      this.product.price = Number(this.realPrice) * this.qty ;
    }
  }

  decrase() {
    if(this.qty !== 1) {
    this.qty = this.qty - 1;
    this.product.price = Number(this.realPrice) * this.qty ;

    }
  }

  onChange(e) {
    if(e.target.value < 1) {
      this.qty = 1;
    } else if(e.target.value > 10) {
      this.qty = 10;
    } else {
      this.qty = e.target.value ;
    }
    this.product.price = Number(this.realPrice) * this.qty ;
  }

  onClick(e) {
    e.preventDefault()
    if(e.target.innerHTML.trim() === 'Съдържание') {
      this.content = true;
      this.upotreba = false;
      this.description = false;
      this.ClassContent = 'active';
      this.ClassUpotreba = 'no-active';
      this.ClassDescription = 'no-active';
    } else if (e.target.innerHTML.trim() === 'Начин на прием'){
      this.content = false;
      this.upotreba = true;
      this.description = false;
      this.ClassContent = 'no-active';
      this.ClassUpotreba = 'active';
      this.ClassDescription = 'no-active';
      
    } else {
      this.content = false;
      this.upotreba = false;
      this.description = true;
      this.ClassContent = 'no-active';
      this.ClassUpotreba = 'no-active';
      this.ClassDescription = 'active';
    }
  }

  getPruce(e) {
    if(e.target.value === "Адрес") {
      this.delviaryPrice = delivaryTo.address;
    } else {
      this.delviaryPrice = delivaryTo.office;
    }
    this.orderPrice = this.product['price'] + this.delviaryPrice;
  }

  onSubmit() { 
    let product = {
      product:{product: this.product._id,
      qty: 1 },
      userIp:1,
    }

    if(this.orderForm.name === '' ||
     this.orderForm.phone === '' ||
     this.orderForm.city === '' ||
     this.orderForm.address  === ''
   ) {
     this.msg.show('Формата е попълнена грешно', { cssClass: 'alert-danger', timeout: 4000 } )
   } else if (
     isNaN(Number(this.orderForm.phone))
   ) {
     this.msg.show('Телефоният номер трябва да съдържа само цифри!', { cssClass: 'alert-danger', timeout: 4000 } )
   }  else if(this.orderForm.phone.length<8) {
     
     this.msg.show('Телефоният номер e твърде кратък!', { cssClass: 'alert-danger', timeout: 4000 } )
   } else if(
      (this.orderForm.phone.startsWith('088') ||
    this.orderForm.phone.startsWith('089')||
    this.orderForm.phone.startsWith('087')||
    this.orderForm.phone.startsWith('09')
   ) && this.orderForm.phone.length !== 10) {
    this.msg.show('Телефоният номер e невалиден!', { cssClass: 'alert-danger', timeout: 4000 } )
    } else {
    this.order.newCart(product).subscribe(info=>{
      if(info['success']) {
        this.orderForm['product'] = info['cartInfo'].product;
    this.order.newOrder(this.orderForm).subscribe(info=>{
      if(info["success"]) {
        sessionStorage.clear();
        this.redirect.navigate(['last-step-order']);
      
      }
    })
      }
    })
  }
}



  onClickButtonBy(e) {
    this.order.getIp().subscribe(data=>{
      let product = {
        product:{product: e.target.value,
        qty: this.qty},
        userIp:data.ip,
      }
      if(sessionStorage.getItem('order')) {
          this.order.updateCart({id:sessionStorage.getItem('order'), product:product})
            .subscribe(data=>{
              if(data['success']) {
                this.redirect.navigate(['cart']);
              }
            })
      } else {
      this.order.newCart(product).subscribe(info=>{
        if(info['success']) {
          sessionStorage.setItem('order', info['cartInfo']._id);
          this.redirect.navigate(['cart']);
        }
      })
    }

    })

  }
}
