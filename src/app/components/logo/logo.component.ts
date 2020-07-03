import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  logo: string;

  constructor() { 
    this.logo = "assets/images/banners/scroadslight.svg"
  }

  ngOnInit() {}

}
