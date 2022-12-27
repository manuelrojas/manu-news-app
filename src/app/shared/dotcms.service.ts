import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class DotCmsService {
  baseUrl =
    'https://demo.dotcms.com/api/content/render/false/query/+contentType:Blog/orderby/modDate%20desc';
  constructor(private http: HttpClient) { }



  sendGetRequest() {
    return this.http.get(this.baseUrl, {});
  }

  getContentById(id: string) {
    return this.http.get(`https://demo.dotcms.com/api/content/id/${id}`, {});
  }

}
