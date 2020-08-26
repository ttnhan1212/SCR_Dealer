import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificationupload',
  templateUrl: './certificationupload.page.html',
  styleUrls: ['./certificationupload.page.scss'],
})
export class CertificationuploadPage implements OnInit {
  files: File[] = [];
  isShow = false;

  constructor(translate: TranslateService) { 
    translate.addLangs(["en", "kr"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("kr");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use("kr");
  }

  ngOnInit() {}

  onSelect(event) {
		console.log(event);
    this.files.push(...event.addedFiles);
    if(this.files) {
      this.isShow = !this.isShow;
    }
	}

}
