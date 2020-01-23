import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingBarComponent } from './branding-bar.component';

describe('BrandingBarComponent', () => {
  let component: BrandingBarComponent;
  let fixture: ComponentFixture<BrandingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
