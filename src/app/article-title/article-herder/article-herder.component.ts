import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-herder',
  templateUrl: './article-herder.component.html',
  styleUrls: ['./article-herder.component.css']
})
export class ArticleHerderComponent implements OnInit, OnChanges {

  @Input()
  item;
  constructor() { }

  getEdit = false;
  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleEdit = new EventEmitter<any>();

  orig_item;

  ngOnInit() {
  }

  ngOnChanges(changes) {

    if (changes.item) {
      this.orig_item = changes.item.currentValue;
      this.item = Object.assign({

      }, changes.item.currentValue);
    }

  }

  ngOnDestroy() {

  }

  doDelete() {
    this.delete.emit(this.item);
  }


  doEdit() {
    console.log('目前的子元件title: ' + this.item);
    this.titleEdit.emit(this.item);
  }

  doCancel() {
    this.item = Object.assign({}, this.orig_item);
    this.getEdit = false;
  }

  isEdit() {
    this.getEdit = true;
  }

}
