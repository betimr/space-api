import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveraMeraComponent } from './observera-mera.component';

describe('ObserveraMeraComponent', () => {
  let component: ObserveraMeraComponent;
  let fixture: ComponentFixture<ObserveraMeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveraMeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveraMeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
