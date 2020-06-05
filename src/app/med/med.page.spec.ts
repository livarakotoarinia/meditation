import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedPage } from './med.page';

describe('MedPage', () => {
  let component: MedPage;
  let fixture: ComponentFixture<MedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
