import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSRecipedetailComponent } from './recipedetail.component';

describe('RecipedetailComponent', () => {
  let component: VSRecipedetailComponent;
  let fixture: ComponentFixture<VSRecipedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSRecipedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSRecipedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
