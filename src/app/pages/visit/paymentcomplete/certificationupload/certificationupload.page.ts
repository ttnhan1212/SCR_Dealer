import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificationupload',
  templateUrl: './certificationupload.page.html',
  styleUrls: ['./certificationupload.page.scss'],
})
export class CertificationuploadPage implements OnInit {
  files: File[] = [];
  isShow = false;

  constructor() { }

  ngOnInit() {}

  onSelect(event) {
		console.log(event);
    this.files.push(...event.addedFiles);
    if(this.files) {
      this.isShow = !this.isShow;
    }
	}

}
