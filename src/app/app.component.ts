import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'poc-dynamic';
  componentName: string;
  valueForComponent:string = 'love-bird';

  getDogs() {
    this.componentName = 'dog';
  }
  getBirds() {
    this.componentName = 'bird';
  }

}
