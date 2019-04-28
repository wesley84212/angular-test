import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {

  counter = 0;

  constructor(public dataser: DataService) {
  }
  data: Array<any>;
  ngOnInit() {
    this.data = this.dataser.data;
  }

  ngOnChanges() {

  }

}
