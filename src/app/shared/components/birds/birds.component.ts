import { Component, OnInit, Input } from '@angular/core';
import { BirdsService } from './birds.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html'
})
export class BirdsComponent implements OnInit {

  @Input() name: string;
  public birdImage;

  constructor(private birdsService: BirdsService) { }

  ngOnInit() {
  }

  public getImage() {
    this.birdsService.getImage(this.name).subscribe(data => {
      this.birdImage = data;
    }, err => {
      alert(err);
    })
  }

}
