import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrantesComponent } from './entrantes.component';

describe('EntrantesComponent', () => {
  let component: EntrantesComponent;
  let fixture: ComponentFixture<EntrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
