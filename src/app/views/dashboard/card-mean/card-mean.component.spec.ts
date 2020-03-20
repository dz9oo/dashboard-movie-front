import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMeanComponent } from './card-mean.component';

describe('CardMeanComponent', () => {
  let component: CardMeanComponent;
  let fixture: ComponentFixture<CardMeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
