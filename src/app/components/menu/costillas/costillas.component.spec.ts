import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostillasComponent } from './costillas.component';

describe('CostillasComponent', () => {
  let component: CostillasComponent;
  let fixture: ComponentFixture<CostillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
