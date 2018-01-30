import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { OrderServices } from '../../../core/service/order.service';
import { MsgServices } from '../../../core/service/msg.service';

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  numberOfOrders = 0;
  numberOfMonthOrders = 0;
  msgs = 0;
  hasNewMsg = 'btn btn-primary btn-lg';
  constructor(private http:OrderServices, private msg: MsgServices) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.allOrdersToday();
  }


  allOrdersToday() {
    this.http.allOrdersToday().subscribe(orders=>{    
          this.numberOfOrders = orders['orders'].length;
           this.http.allOrdersThisMonth().subscribe(monthOrders=>{
                this.numberOfMonthOrders = monthOrders['orders'].length;
                this.msg.getMsgCount().subscribe(msgCount => {
                  if(msgCount['success']) {
                    this.msgs = msgCount['count'];
                    if(this.msgs !== 0) {
                    this.hasNewMsg = 'btn btn-danger btn-lg';
                    } else  {
                      this.hasNewMsg = 'btn btn-primary btn-lg';
                    }
                    console.log(msgCount["count"]);
                  } 
                })
             })
    })
  }

  @Output() changeView: EventEmitter<any> = new EventEmitter();

  onClick(e) {
    console.log(e);
    let value = 'article';
    let string = e.target.innerText.trim();
    if (string === 'НОВ ПРОДУКТ') {
      value = 'newProduct'
    } else if (string === 'ПОРЪЧКИ') {
      value = 'orders';
    } else if (string === "ПОТРЕБИТЕЛИ"){
      value = 'users';
    } else if (string === 'СЛАЙДЕР') {
      console.log(string);
      value = 'slider'
    }
    this.changeView.emit(value);
  }
}
