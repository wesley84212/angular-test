import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleHerderComponent } from './article-herder/article-herder.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArticleListComponent, ArticleHerderComponent, ArticleBodyComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ArticleListComponent]
})
export class ArticleTitleModule { }
