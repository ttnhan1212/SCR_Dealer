import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisit',
  templateUrl: './revisit.page.html',
  styleUrls: ['./revisit.page.scss'],
})
export class RevisitPage implements OnInit {
  now: string = new Date().toISOString();
  selectDate: Date;
  
  constructor() { }

  ngOnInit() {
  }

}
