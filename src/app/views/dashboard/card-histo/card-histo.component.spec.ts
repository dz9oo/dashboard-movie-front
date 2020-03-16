import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoComponent } from './card-histo.component';

describe('CardHistoComponent', () => {
  let component: CardHistoComponent;
  let fixture: ComponentFixture<CardHistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
