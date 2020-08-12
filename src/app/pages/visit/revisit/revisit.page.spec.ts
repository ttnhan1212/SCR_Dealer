import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevisitPage } from './revisit.page';

describe('RevisitPage', () => {
  let component: RevisitPage;
  let fixture: ComponentFixture<RevisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
