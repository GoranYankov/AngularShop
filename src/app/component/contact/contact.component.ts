import { Component, OnInit } from '@angular/core';
import {delivaryTo} from './../../config/delivary.config';
import { ContactFormModel } from '../../core/models/input-models/contact-form.models';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { MsgServices } from '../../core/service/msg.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mail = delivaryTo.mail;
  phone:String = delivaryTo.phone;
  telefon:string = delivaryTo.phone;
  fb:String = delivaryTo.fbPage;
  succesMsg:Boolean = false;
  contactForm:ContactFormModel;
  
  constructor(
      private http: MsgServices, 
      private msg: FlashMessagesService,
      private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.contactForm = new ContactFormModel('', '', '', '', '')
  }

  onClick() {
    let err = false
    for (let i in this.contactForm) {
      if(this.contactForm[i].trim() === '') {
        err = true;
      }
      if(err) {
        break
      }
      this.contactForm[i] = this.contactForm[i].trim();
    }
    if (!err) {
      this.http.sendMsg(this.contactForm).subscribe(data=>{
        if(data['success']) {
          window.scrollTo(0, 0)
          this.msg.show('Вашето съобщение е изпратено успешно', { cssClass: 'alert-success', timeout: 5000 } );
          this.contactForm = new ContactFormModel('', '','', '','')
          this.succesMsg = true;
        }
      })
    } else {
      this.msg.show('Грешно попълнена форма', { cssClass: 'alert-danger', timeout: 4000 } )
    }
    }

}
