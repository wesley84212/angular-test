import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;
  constructor(private http : HttpClient) {
    this.data = [
      { "id": 1, "href": 'http://google.com.tw', "title": '測試用文章1234', "date": '2019/04/26', "author": 'wesley', "summary": 'Angular就當前端SPA框架<br>這時候不管後端是什麼，只要是一個API可以被呼叫就好<br>另外，CORS跟前後端是什麼沒關係，你應該要去查一下CORS的發生原因…' },
      { "id": 2, "href": 'http://yahoo.com.tw', "title": '測試用文2', "date": '2019/04/20', "author": 'wesley', "summary": 'Angular就當前端SPA框架<br>這時候不管後端是什麼' }
    ];
  }

  public getDelete(item) {
    this.run();
    this._run();
    this.data = this.data.filter((v) => {

      return v.id !== item.id;
    });
  };

  public run() {
    console.log('public-run');
  }

  private _run() {
    console.log('private-run');
  }

  private doModify(post: any) {
    console.log(post);
    this.data = this.data.map((data) => {
      if (data.id == post.id) {
        return Object.assign({}, data, post);
      }
      return data;
    });
  }

}
