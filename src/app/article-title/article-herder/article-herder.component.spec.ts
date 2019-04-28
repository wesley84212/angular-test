import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHerderComponent } from './article-herder.component';

describe('ArticleHerderComponent', () => {
  let component: ArticleHerderComponent;
  let fixture: ComponentFixture<ArticleHerderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHerderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
