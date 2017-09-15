import {Component} from '@angular/core';
import {GoogleService} from "../service/google.service";
import {Observable} from "rxjs/Observable";
import {MatrixColumn} from "../model/matrixColumn.model";

@Component({
  selector: 'search',
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html'
})
export class SearchComponent {

  urlsList$ : Observable<any[]>;
  loading: boolean;
  matrix: MatrixColumn [] = [];
  currentPhotoUrl: string = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
  currentPhotoLoading: boolean;

  allFinished: boolean = false;

  constructor(private googleService : GoogleService){
  }

  searchRep(rep: string){
    this.allFinished = false;
    this.loading = true;
    this.urlsList$ = this.googleService.searchFor(rep, '1');
    this.urlsList$.subscribe( images => {

      this.makeRequest(images, null).subscribe(
        () => {
          this.matrix = [{
            currentUrl: "http://cdn.newsday.com/polopoly_fs/1.9489299.1412982634!/httpImage/image.JPG_gen/derivatives/display_600/image.JPG",
            isMatching: true,
            repCrd: '2346843',
            repFullName: 'HOTTON, MARK CHRISTOPHER'
          }, {
            currentUrl: "http://cdn.newsday.com/polopoly_fs/1.5802388.1375280556!/httpImage/image.JPG_gen/derivatives/display_600/image.JPG",
            isMatching: true,
            repCrd: '2346843',
            repFullName: 'HOTTON, MARK CHRISTOPHER'
          },{
            currentUrl: "http://assets.nydailynews.com/polopoly_fs/1.1193903.1351388139!/img/httpImage/image.jpg_gen/derivatives/article_750/rebecca28n-6-copy.jpg",
            isMatching: true,
            repCrd: '2346843',
            repFullName: 'HOTTON, MARK CHRISTOPHER'
          }];
          this.allFinished = true;
          console.log('all requests finished');
        });
      this.loading = false;
    });
  }

  makeRequest(queryArr, previousObservable){
    if (queryArr.length) {
      let payload = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
      if(queryArr[0].pagemap.cse_thumbnail) {
        payload = queryArr[0].pagemap.cse_thumbnail[0].src;
      }
      console.log("picture should be : " + this.currentPhotoUrl);
        var observable = null;
        queryArr.splice(0, 1);
        if (previousObservable) {
          observable = previousObservable.flatMap(() => {
            this.currentPhotoLoading = true;
            this.currentPhotoUrl = payload;
            return this.googleService.compareImage(payload)
              .do((column) => {
                this.currentPhotoLoading = false;
                console.log('request finished');
              });
          });
        } else {
          this.currentPhotoLoading = true;
          this.currentPhotoUrl = payload;
          observable = this.googleService.compareImage(payload)
            .do((column) => {
              this.currentPhotoLoading = false;
              console.log('request finished');
            });
        }
        return this.makeRequest(queryArr, observable);
      } else {
        return previousObservable;
      }
  }
}
