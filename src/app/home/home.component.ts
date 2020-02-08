import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  gall_btn = [
    "Grafika 2D",
    "Grafika 3D"
  ]

  ngOnInit() {
  }

}
