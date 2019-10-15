import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  private images: Array<any> = [
    { name: 'love-bird', imagePath: '../../../assets/images/love-bird.jpg' },
    { name: 'papagaio', imagePath: '../../../assets/images/papagaio.jpg' }
  ];

  constructor() { }

  getImage(name: string): Observable<string> {
    return new Observable<string>(obs => {
      if (name) {
        let result = this.images.find(image => {
          return image.name === name;
        })
        if (result) {
          obs.next(result);
        } else {
          obs.error('None');
        }
      }
    });
  }

}
