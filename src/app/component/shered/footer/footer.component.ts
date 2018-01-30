import { Component, OnInit } from '@angular/core';
import {delivaryTo} from './../../../config/delivary.config'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  delivary = delivaryTo;
  constructor() { }

  ngOnInit() {
  }




}

