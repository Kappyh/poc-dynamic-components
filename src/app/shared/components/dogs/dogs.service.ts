import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private video: string = 'He82NBjJqf8';
  
  constructor() { }

  getVideo(id: number): Observable<string> {
    return new Observable<string>(obs => {
      if (id) {
        obs.next(this.video)
      } else {
        obs.error('Nenhum video encontrado')
      }
    });
  }
}
