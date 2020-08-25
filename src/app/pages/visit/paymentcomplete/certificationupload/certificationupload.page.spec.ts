import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificationuploadPage } from './certificationupload.page';

describe('CertificationuploadPage', () => {
  let component: CertificationuploadPage;
  let fixture: ComponentFixture<CertificationuploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationuploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificationuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
