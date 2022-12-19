import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntimagenComponent } from './cntimagen.component';

describe('CntimagenComponent', () => {
  let component: CntimagenComponent;
  let fixture: ComponentFixture<CntimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CntimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CntimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
