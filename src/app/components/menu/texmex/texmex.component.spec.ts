import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexmexComponent } from './texmex.component';

describe('TexmexComponent', () => {
  let component: TexmexComponent;
  let fixture: ComponentFixture<TexmexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexmexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexmexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
