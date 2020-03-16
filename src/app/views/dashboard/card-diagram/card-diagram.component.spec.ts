import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiagramComponent } from './card-diagram.component';

describe('CardDiagramComponent', () => {
  let component: CardDiagramComponent;
  let fixture: ComponentFixture<CardDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
