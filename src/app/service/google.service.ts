
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import "rxjs";
import {MatrixColumn} from "../model/matrixColumn.model";
@Injectable()
export class GoogleService {


  constructor(private http: Http) {
  }

  searchFor(repName: string, startIndex: string): Observable<any[]>{

    let params: URLSearchParams = new URLSearchParams();
    params.set('key', 'AIzaSyCVIBOmB32f0OW5-XASVNMlM-AX--uAtNI');
    params.set('q', repName);
    params.set('cx', '007856604476394740758:gsmafyxvnki');
    params.set('c2coff', '1');
    params.set('start', startIndex);

    return this.http.get('https://www.googleapis.com/customsearch/v1', {search: params})
      .map(r => r.json().items);
  }

  compareImage(pictureUrl: string): Observable<MatrixColumn[]>{
    console.log("comparing against " + pictureUrl);
    return Observable.of([
      {
        currentUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsMYUTEmcX7Ffj8tjaxXZSe_mV0WQfgSzoOe21Jfket5N1R-UURTDTffP6 ",
        isMatching: true,
        repCrd: '2346843',
        repFullName: 'HOTTON, MARK CHRISTOPHER'
      },
      {
        currentUrl: "http://cdn.newsday.com/polopoly_fs/1.9489299.1412982634!/httpImage/image.JPG_gen/derivatives/display_600/image.JPG",
        isMatching: true,
        repCrd: '4171508',
        repFullName: 'IAK, MATTHEW PARKER'
      }]
    ).delay(1200);
  }


}
