import { Injectable } from '@angular/core';
import { BirdsComponent } from '../components/birds/birds.component';
import { DogsComponent } from '../components/dogs/dogs.component';
import { Observable } from 'rxjs';
import { Api } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private fakeApi: Array<Api> = [
    { name: 'bird', component: BirdsComponent },
    { name: 'dog', component: DogsComponent }
  ];
  constructor() { }

  getComponent(name: string): Observable<any> {
    return new Observable<Api>(obs => {
      let component: Api = new Api();
      component = this.fakeApi.find((api) => {
        return api.name === name;
      })
      if (component) {
        obs.next(component);
      } else {
        obs.error('Component not found' + name);
      }
    });
  }
}
