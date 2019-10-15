import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html'
})
export class DogsComponent {

  @Input() id: number;

  public url;

  constructor(private dogsService: DogsService, private sanitizer: DomSanitizer) { }

  getVideo() {
    this.dogsService.getVideo(1).subscribe(data => {
      this.url = 'https://www.youtube.com/embed/' + data;
    }, err => {
      alert(err);
    }
    );
  }
}
