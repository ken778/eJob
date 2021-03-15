import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidatesPage } from './candidates.page';

describe('CandidatesPage', () => {
  let component: CandidatesPage;
  let fixture: ComponentFixture<CandidatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
