import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any;
  constructor() { }

  ngOnInit() {
    this.id = '5ed82bf14f14473d2b9e5210'
  }

}
