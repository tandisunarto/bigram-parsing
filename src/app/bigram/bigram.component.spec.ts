import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigramComponent } from './bigram.component';

describe('BigramComponent', () => {
  let component: BigramComponent;
  let fixture: ComponentFixture<BigramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
