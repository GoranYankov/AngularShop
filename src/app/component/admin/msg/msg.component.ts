import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgServices } from '../../../core/service/msg.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  msgs:Array<Object>;
  constructor(private router: Router, private http: MsgServices) { }

  ngOnInit() {
    this.loadeMsg();
  }

  loadeMsg() {
    this.http.getAllMsg().subscribe(msgs=>{
      if(msgs['success']) {
        this.msgs = msgs['msgs'];
      }
    })
  }

  back() {
    this.router.navigate(['goran']);
  }

  remove(e) {
    this.http.deleteMsg({id:e.target['id']}).subscribe(info=>{
      console.log(info);
        if(info['success']) {
          this.loadeMsg();
        }
      }
    )}

    setRedMsg(e) {
      this.http.readMsg({id:e.target['id']}).subscribe(info=>{
        console.log(info);
          if(info['success']) {
            this.loadeMsg();
          }
        }
      )}

    unSetRedMsg(e) {
        this.http.unReadMsg({id:e.target['id']}).subscribe(info=>{
          console.log(info);
            if(info['success']) {
              this.loadeMsg();
            }
          }
        )}
    
}
