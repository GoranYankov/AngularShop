import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivary',
  templateUrl: './delivary.component.html',
  styleUrls: ['./delivary.component.css']
})
export class DelivaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
