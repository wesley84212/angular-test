import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {

  @Input()
  item;
  @Input()
  counter;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }
}
