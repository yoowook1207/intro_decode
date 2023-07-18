import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBlockComponent } from './mobile-block.component';

describe('MobileBlockComponent', () => {
  let component: MobileBlockComponent;
  let fixture: ComponentFixture<MobileBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBlockComponent]
    });
    fixture = TestBed.createComponent(MobileBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
