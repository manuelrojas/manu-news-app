import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DotCmsService {
  filterType: BehaviorSubject<string>;
  api = 'https://demo.dotcms.com/api';

  constructor(private http: HttpClient) {
    this.filterType = new BehaviorSubject<string>('');
  }

  sendGetRequest(year: string) {
    return this.http.get(
      `${this.api}/content/render/false/query/+contentType:Blog${year}/orderby/modDate%20desc`,
      {}
    );
  }

  setDateFilter(year: string | undefined) {
    let value = ""
    if (year) {
      value = `/+Blog.postingDate:${year}1231TO${year}1231`;
    }
    this.filterType.next(value || '');
  }

  getDateFilter(): Observable<string> {
    return this.filterType.asObservable();
  }

  getContentById(id: string) {
    return this.http.get(`${this.api}/content/id/${id}`, {});
  }
}
