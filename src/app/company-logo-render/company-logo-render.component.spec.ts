import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogoRenderComponent } from './company-logo-render.component';

describe('CompanyLogoRenderComponent', () => {
  let component: CompanyLogoRenderComponent;
  let fixture: ComponentFixture<CompanyLogoRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyLogoRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyLogoRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
